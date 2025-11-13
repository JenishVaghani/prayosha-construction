import { useEffect, useState } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  {
    icon: Building2,
    value: 250,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-orange-500'
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'text-yellow-400'
  },
  {
    icon: Award,
    value: 12,
    suffix: '',
    label: 'Industry Awards',
    color: 'text-orange-500'
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-yellow-400'
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), value);
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`inline-block p-4 bg-white/10 rounded-xl mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>

              <div className="text-5xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>

              <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
