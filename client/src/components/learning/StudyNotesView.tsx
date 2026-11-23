import React, { useState } from 'react';
import {
  BookOpen,
  Target,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { Topic } from '../../types';

interface StudyNotesViewProps {
  topic: Topic;
}

export const StudyNotesView: React.FC<StudyNotesViewProps> = ({ topic }) => {
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Key Learning Objectives */}
      <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2.5 mb-3 text-sky-800">
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Key Learning Objectives</h3>
        </div>
        <ul className="space-y-2 mt-2">
          {topic.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-sky-200/70 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Important Formulas & Concepts (if any) */}
      {topic.keyFormulasOrConcepts && topic.keyFormulasOrConcepts.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-800">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h3 className="text-base font-bold text-slate-900">Core Formulas & Axioms</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {topic.keyFormulasOrConcepts.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-amber-200/70 p-4 shadow-xs relative overflow-hidden group hover:border-amber-300 transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400" />
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <div className="font-mono text-xs sm:text-sm font-bold text-slate-900 bg-amber-50/60 p-2.5 rounded-lg border border-amber-100 my-2 break-words">
                  {item.formulaOrRule}
                </div>
                {item.note && (
                  <p className="text-[11px] text-slate-500 italic mt-1 leading-normal">
                    {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Detailed Study Notes & Curated Explanations */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-slate-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <h3 className="text-base font-bold text-slate-900">Curated Revision Notes</h3>
        </div>

        <div className="space-y-5">
          {topic.studyNotes.map((section, sIdx) => (
            <div
              key={sIdx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4"
            >
              <h4 className="text-sm sm:text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                {section.sectionTitle}
              </h4>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Callout box if present */}
              {section.calloutBox && (
                <div
                  className={`rounded-xl p-4 border text-xs sm:text-sm flex items-start gap-3 ${
                    section.calloutBox.type === 'tip'
                      ? 'bg-sky-50/80 border-sky-200 text-sky-950'
                      : section.calloutBox.type === 'warning'
                      ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                      : 'bg-blue-50/80 border-blue-200 text-blue-950'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {section.calloutBox.type === 'tip' && (
                      <Lightbulb className="w-4 h-4 text-sky-600" />
                    )}
                    {section.calloutBox.type === 'warning' && (
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                    )}
                    {section.calloutBox.type === 'remember' && (
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    {section.calloutBox.title && (
                      <span className="font-bold block mb-0.5">
                        {section.calloutBox.title}
                      </span>
                    )}
                    <p className="leading-relaxed">{section.calloutBox.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Self-Check Practice Questions (if available) */}
      {topic.practiceQuestions && topic.practiceQuestions.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 text-slate-800">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <h3 className="text-base font-bold text-slate-900">Check Your Understanding</h3>
          </div>

          <div className="space-y-3">
            {topic.practiceQuestions.map((pq, idx) => {
              const isOpen = revealedSolutions[pq.id];
              return (
                <div
                  key={pq.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 font-mono">
                        QUESTION {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {pq.question}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-600">
                    <span className="font-bold text-slate-700">Hint: </span>
                    <span>{pq.hint}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => toggleSolution(pq.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <span>{isOpen ? 'Hide Solution' : 'Reveal Solution & Steps'}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed animate-fade-in">
                        <span className="font-bold block text-blue-900 mb-1">Answer & Logic:</span>
                        <p>{pq.solution}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
