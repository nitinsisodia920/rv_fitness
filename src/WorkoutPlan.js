import React, { useState } from 'react';
import { Dumbbell, Heart, Shield, ChevronDown, ChevronUp, Plus, X, Activity } from 'lucide-react';

const WorkoutPlan = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const categories = [
    { id: 'yoga', name: 'Yoga', icon: <Activity /> },
    { id: 'weightlifting', name: 'Weight Lifting', icon: <Dumbbell /> },
    { id: 'strength', name: 'Strength Training', icon: <Shield /> },
    { id: 'cardio', name: 'Cardio', icon: <Heart /> }
  ];

  // Added image URLs to exercises
  const exercises = {
    yoga: [
      { 
        id: 1, 
        name: 'Downward Dog', 
        duration: '1 min', 
        difficulty: 'Beginner', 
        calories: 5,
        description: 'Start on hands and knees, then lift hips up and back, forming an inverted V shape.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661963354273-db9922d48f1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 2, 
        name: 'Warrior I', 
        duration: '45 sec', 
        difficulty: 'Intermediate', 
        calories: 8,
        description: 'Step one foot back, bend front knee, raise arms overhead.',
        imageUrl: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 3, 
        name: 'Tree Pose', 
        duration: '30 sec each side', 
        difficulty: 'Beginner', 
        calories: 4,
        description: 'Stand on one leg, place other foot on inner thigh, hands in prayer position.',
        imageUrl: 'https://media.istockphoto.com/id/532386442/photo/practicing-yoga-and-meditation-in-summer-on-beach-in-sunset.jpg?s=2048x2048&w=is&k=20&c=9mPvN7qzsatSy8CSrlrsbV6L6kGL72i8H6jA1fPw4wM='
      }
    ],
    weightlifting: [
      { 
        id: 4, 
        name: 'Bench Press', 
        sets: '3x10', 
        difficulty: 'Intermediate', 
        calories: 150,
        description: 'Lie on bench, lower barbell to chest, press up to starting position.',
        imageUrl: 'https://images.unsplash.com/photo-1652363722833-509b3aac287b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 5, 
        name: 'Deadlift', 
        sets: '4x8', 
        difficulty: 'Advanced', 
        calories: 200,
        description: 'Bend at hips and knees, grab barbell, stand up straight while holding barbell.',
        imageUrl: 'https://images.unsplash.com/photo-1541600278744-d4cba88bb2c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 6, 
        name: 'Shoulder Press', 
        sets: '3x12', 
        difficulty: 'Intermediate', 
        calories: 100,
        description: 'Press dumbbells overhead from shoulder height.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663134077440-3bd94bfee77f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    strength: [
      { 
        id: 7, 
        name: 'Push-ups', 
        sets: '3x15', 
        difficulty: 'Beginner', 
        calories: 50,
        description: 'Start in plank position, lower body until chest nearly touches ground, push back up.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661700263241-6e822c026f03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 8, 
        name: 'Pull-ups', 
        sets: '3x8', 
        difficulty: 'Advanced', 
        calories: 100,
        description: 'Hang from bar, pull body up until chin is over bar.',
        imageUrl: 'https://images.unsplash.com/photo-1677165733273-dcc3724c00e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 9, 
        name: 'Squats', 
        sets: '4x12', 
        difficulty: 'Beginner', 
        calories: 80,
        description: 'Stand with feet shoulder-width apart, lower body until thighs are parallel to ground.',
        imageUrl: 'https://images.unsplash.com/photo-1513352098199-8ccf457b35a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
    cardio: [
      { 
        id: 10, 
        name: 'Running', 
        duration: '30 min', 
        difficulty: 'Intermediate', 
        calories: 300,
        description: 'Maintain steady pace running outdoors or on treadmill.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663046015964-453d8db5561b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      { 
        id: 11, 
        name: 'Jump Rope', 
        duration: '15 min', 
        difficulty: 'Beginner', 
        calories: 200,
        description: 'Jump rope continuously, alternating feet or bouncing on both feet.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      
    ]
  };

 

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600';
      case 'intermediate': return 'text-orange-600';
      case 'advanced': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const addToWorkout = (exercise) => {
    if (!selectedExercises.find(ex => ex.id === exercise.id)) {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  const removeFromWorkout = (exerciseId) => {
    setSelectedExercises(selectedExercises.filter(ex => ex.id !== exerciseId));
  };

  const filterExercises = () => {
    if (activeCategory === 'all') {
      return Object.values(exercises).flat();
    }
    return exercises[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-500 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Dumbbell className="h-8 w-8" />
            Custom Workout Plan
          </h1>
          <p className="mt-2">Create your perfect workout routine</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-800'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-800'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exercise List */}
          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {filterExercises().map(exercise => (
                <div key={exercise.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{exercise.name}</h3>
                        <div className="mt-1 flex gap-2 text-sm">
                          <span className={getDifficultyColor(exercise.difficulty)}>
                            {exercise.difficulty}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-600">
                            {exercise.duration || exercise.sets}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-600">{exercise.calories} cal</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addToWorkout(exercise)}
                        className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <img
                        src={exercise.imageUrl}
                        alt={exercise.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => setExpandedExercise(expandedExercise === exercise.id ? null : exercise.id)}
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600"
                      >
                        {expandedExercise === exercise.id ? (
                          <>Less info <ChevronUp size={16} /></>
                        ) : (
                          <>More info <ChevronDown size={16} /></>
                        )}
                      </button>
                      
                      {expandedExercise === exercise.id && (
                        <p className="mt-2 text-gray-600">{exercise.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Exercises */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Your Workout Plan</h2>
              {selectedExercises.length === 0 ? (
                <p className="text-gray-500">Add exercises to create your plan</p>
              ) : (
                <div className="space-y-4">
                  {selectedExercises.map(exercise => (
                    <div key={exercise.id} className="flex justify-between items-center bg-orange-50 p-3 rounded">
                      <div>
                        <h4 className="font-medium">{exercise.name}</h4>
                        <p className="text-sm text-gray-600">
                          {exercise.duration || exercise.sets}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromWorkout(exercise.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600">
                      Total Calories: {selectedExercises.reduce((sum, ex) => sum + ex.calories, 0)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;