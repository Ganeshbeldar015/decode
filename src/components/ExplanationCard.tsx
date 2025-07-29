import React from 'react';
import { BookOpen } from 'lucide-react';
import type { CodeExplanation } from '../types';

interface ExplanationCardProps {
  explanation: CodeExplanation;
}

const ExplanationCard: React.FC<ExplanationCardProps> = ({ explanation }) => {
  return (
    <div className="border border-blue-400/20 bg-blue-400/10 rounded-lg p-4">
      <div className="flex items-start space-x-3 mb-3">
        <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-white mb-1">Line {explanation.line}</h4>
          <pre className="bg-gray-900 border border-gray-600 rounded p-2 text-sm text-gray-100 overflow-x-auto mb-3">
            <code>{explanation.code}</code>
          </pre>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">{explanation.explanation}</p>
          
          {explanation.concepts.length > 0 && (
            <div>
              <h5 className="text-xs font-medium text-gray-400 mb-2">Related Concepts:</h5>
              <div className="flex flex-wrap gap-2">
                {explanation.concepts.map((concept, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;