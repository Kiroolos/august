import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Target, Dumbbell, Book, Briefcase, Phone } from 'lucide-react';

const AugustRoutineTracker = () => {
  const [completedTasks, setCompletedTasks] = useState({});
  
  const remainingDays = [];
  for (let day = 17; day <= 31; day++) {
    remainingDays.push(day);
  }

  const dailyRoutine = [
    { 
      id: 'wake', 
      task: 'Wake up 5:00-5:30 AM', 
      icon: Clock, 
      color: 'text-orange-500',
      category: 'morning' 
    },
    { 
      id: 'gym', 
      task: 'Gym session (6:00 AM or after work)', 
      icon: Dumbbell, 
      color: 'text-red-500',
      category: 'fitness' 
    },
    { 
      id: 'work', 
      task: 'Work (arrive before 9 AM)', 
      icon: Briefcase, 
      color: 'text-blue-500',
      category: 'work' 
    },
    { 
      id: 'study_morning', 
      task: 'eWPTX Study - Morning session (1-2 hours)', 
      icon: Book, 
      color: 'text-green-500',
      category: 'study' 
    },
    { 
      id: 'study_evening', 
      task: 'eWPTX Practice - Evening session (2-3 hours)', 
      icon: Target, 
      color: 'text-green-600',
      category: 'study' 
    },
    { 
      id: 'clean_eating', 
      task: 'Maintain clean eating all day', 
      icon: CheckCircle2, 
      color: 'text-purple-500',
      category: 'health' 
    },
    { 
      id: 'phone_discipline', 
      task: 'Minimize phone distractions', 
      icon: Phone, 
      color: 'text-gray-500',
      category: 'discipline' 
    }
  ];

  const toggleTask = (day, taskId) => {
    const key = `${day}-${taskId}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getDayProgress = (day) => {
    const completed = dailyRoutine.filter(task => 
      completedTasks[`${day}-${task.id}`]
    ).length;
    return Math.round((completed / dailyRoutine.length) * 100);
  };

  const getOverallProgress = () => {
    const totalTasks = remainingDays.length * dailyRoutine.length;
    const completedCount = Object.values(completedTasks).filter(Boolean).length;
    return Math.round((completedCount / totalTasks) * 100);
  };

  const studyTips = [
    "Focus on hands-on labs over theory",
    "Practice common web app vulnerabilities daily",
    "Set up your testing environment properly",
    "Review previous exam attempts/feedback",
    "Practice time management with mock exams"
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">August eWPTX Exam Prep 🎯</h1>
        <p className="text-gray-600 mb-4">Days remaining: <span className="font-semibold text-red-500">{31 - 16}</span> days until exam deadline</p>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
          <div className="bg-white bg-opacity-20 rounded-full h-4 mb-2">
            <div 
              className="bg-white rounded-full h-4 transition-all duration-500"
              style={{width: `${getOverallProgress()}%`}}
            />
          </div>
          <p className="text-sm">{getOverallProgress()}% Complete</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Target className="mr-2 text-green-500" />
            eWPTX Study Tips
          </h3>
          <ul className="space-y-2">
            {studyTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Structure</h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2 text-orange-500" />
              <span><strong>5:00-6:00 AM:</strong> Wake up & prep for gym</span>
            </div>
            <div className="flex items-center text-sm">
              <Dumbbell className="w-4 h-4 mr-2 text-red-500" />
              <span><strong>6:00-7:30 AM:</strong> Gym session</span>
            </div>
            <div className="flex items-center text-sm">
              <Book className="w-4 h-4 mr-2 text-green-500" />
              <span><strong>8:00-9:00 AM:</strong> Quick eWPTX review</span>
            </div>
            <div className="flex items-center text-sm">
              <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
              <span><strong>9:00 AM-6:00 PM:</strong> Work</span>
            </div>
            <div className="flex items-center text-sm">
              <Target className="w-4 h-4 mr-2 text-green-600" />
              <span><strong>7:00-10:00 PM:</strong> Intensive eWPTX practice</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {remainingDays.map(day => (
          <div key={day} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Aug {day}</h3>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  getDayProgress(day) === 100 ? 'bg-green-500 text-white' : 
                  getDayProgress(day) > 0 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {getDayProgress(day)}%
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {dailyRoutine.map(item => {
                const isCompleted = completedTasks[`${day}-${item.id}`];
                const IconComponent = item.icon;
                
                return (
                  <div 
                    key={item.id}
                    className={`flex items-center p-2 rounded-lg cursor-pointer transition-all ${
                      isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => toggleTask(day, item.id)}
                  >
                    {isCompleted ? 
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> :
                      <Circle className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    }
                    <IconComponent className={`w-4 h-4 mr-2 ${item.color} flex-shrink-0`} />
                    <span className={`text-sm ${isCompleted ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                      {item.task}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <h4 className="font-semibold text-red-800 mb-2">🚨 Exam Countdown Alert</h4>
        <p className="text-red-700 text-sm">
          With only 15 days left, prioritize hands-on practice over theory. 
          Dedicate at least 3-4 hours daily to eWPTX materials and labs!
        </p>
      </div>
    </div>
  );
};

export default AugustRoutineTracker;
