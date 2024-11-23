import express from 'express';
import path from 'path';
import Razorpay from 'razorpay';
import shortid from 'shortid';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);

const razorpay = new Razorpay({
  key_id: "rzp_test_4W26iQdHpqmXmZ",
  key_secret:"SjzHI8fpzFh4wCDzdr75U7Az",
});

router.get("/logo.svg", (req, res) => {
  res.sendFile(path.join(__dirname, "logo.svg"));
});

router.post("/verification", (req, res) => {
  const secret = "razorpaysecret";
  console.log(req.body);
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  console.log(digest, req.headers["x-razorpay-signature"]);
  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    res.status(200).json({
      message: "OK",
    });
  } else {
    res.status(403).json({ message: "Invalid" });
  }
});

router.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 1000;
  const currency = "INR";
  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred while creating the order" });
  }
});

export default router;