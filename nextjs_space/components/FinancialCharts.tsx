
'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Users, Target, Building, Calendar } from 'lucide-react';

const revenueProjectionData = [
  { year: 'Year 1 (2025)', government: 80, b2b: 70, premium: 30, total: 180 },
  { year: 'Year 2 (2026)', government: 200, b2b: 350, premium: 150, total: 700 },
  { year: 'Year 3 (2027)', government: 500, b2b: 1200, premium: 400, total: 2100 },
  { year: 'Year 4 (2028)', government: 800, b2b: 2500, premium: 800, total: 4100 },
  { year: 'Year 5 (2029)', government: 1200, b2b: 4000, premium: 1500, total: 6700 },
];

const costBreakdownData = [
  { category: 'Human Resources', amount: 1448, percentage: 68.3, color: '#1E3A5F' },
  { category: 'Infrastructure & Tech', amount: 239, percentage: 11.3, color: '#2C7A7B' },
  { category: 'Operations', amount: 142, percentage: 6.7, color: '#D4AF37' },
  { category: 'Marketing & Sales', amount: 152, percentage: 7.2, color: '#F4D03F' },
  { category: 'One-time Setup', amount: 140, percentage: 6.5, color: '#4A5568' },
];

const monthlyBurnRateData = [
  { month: 'Month 1', burnRate: 195, revenue: 5, netCash: -190 },
  { month: 'Month 3', burnRate: 180, revenue: 12, netCash: -168 },
  { month: 'Month 6', burnRate: 175, revenue: 28, netCash: -147 },
  { month: 'Month 9', burnRate: 170, revenue: 45, netCash: -125 },
  { month: 'Month 12', burnRate: 165, revenue: 75, netCash: -90 },
  { month: 'Month 18', burnRate: 160, revenue: 140, netCash: -20 },
  { month: 'Month 24', burnRate: 158, revenue: 200, netCash: 42 },
];

const studentReachData = [
  { year: '2025', students: 50, institutions: 500 },
  { year: '2026', students: 150, institutions: 1000 },
  { year: '2027', students: 400, institutions: 1800 },
  { year: '2028', students: 800, institutions: 3200 },
  { year: '2029', students: 1500, institutions: 5000 },
  { year: '2030', students: 2000, institutions: 6000 },
];

const fundingScenarios = [
  { scenario: 'Conservative', amount: 150, runway: 14, notes: 'Minimal features, slower growth' },
  { scenario: 'Recommended', amount: 250, runway: 18, notes: 'Balanced growth and features' },
  { scenario: 'Aggressive', amount: 350, runway: 12, notes: 'Rapid expansion, full features' },
];

interface FinancialChartsProps {
  activeView: 'business' | 'technical';
}

export default function FinancialCharts({ activeView }: FinancialChartsProps) {
  const formatCurrency = (value: number) => `₹${value}L`;
  const formatLargeNumber = (value: number) => {
    if (value >= 10) return `${(value / 10).toFixed(1)}M`;
    return `${value * 10}K`;
  };

  return (
    <section id="financial" className="container-custom">
      <h2 className="section-title">5-Year Financial Projections & Analysis</h2>
      <p className="section-subtitle">
        {activeView === 'business' 
          ? 'Comprehensive financial outlook for stakeholders and investors'
          : 'Detailed cost structure and revenue modeling for implementation planning'
        }
      </p>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="card-base text-center">
          <div className="flex items-center justify-center mb-3">
            <DollarSign className="w-8 h-8 text-[var(--color-teal)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-navy)] mb-1">₹21.2Cr</div>
          <div className="text-sm text-[var(--color-text-secondary)]">Year 1 Total Investment</div>
        </div>
        <div className="card-base text-center">
          <div className="flex items-center justify-center mb-3">
            <TrendingUp className="w-8 h-8 text-[var(--color-gold)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-navy)] mb-1">₹67Cr</div>
          <div className="text-sm text-[var(--color-text-secondary)]">Year 5 Revenue Target</div>
        </div>
        <div className="card-base text-center">
          <div className="flex items-center justify-center mb-3">
            <Users className="w-8 h-8 text-[var(--color-teal)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-navy)] mb-1">2M+</div>
          <div className="text-sm text-[var(--color-text-secondary)]">Students by 2030</div>
        </div>
        <div className="card-base text-center">
          <div className="flex items-center justify-center mb-3">
            <Target className="w-8 h-8 text-[var(--color-gold)]" />
          </div>
          <div className="text-3xl font-bold text-[var(--color-navy)] mb-1">18M</div>
          <div className="text-sm text-[var(--color-text-secondary)]">Months to Break-even</div>
        </div>
      </div>

      {/* Revenue Projection Chart */}
      <div className="card-base mb-12">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3" />
          Revenue Growth Trajectory (2025-2030)
        </h3>
        {activeView === 'business' && (
          <p className="text-[var(--color-text-secondary)] mb-6">
            Hybrid revenue model shows strong growth across all streams, with B2B2C subscriptions becoming the primary driver by Year 3.
          </p>
        )}
        {activeView === 'technical' && (
          <p className="text-[var(--color-text-secondary)] mb-6">
            Technical scalability enables 4x revenue growth annually from Year 2-4, driven by platform automation and AI optimization.
          </p>
        )}
        <div className="chart-container-large">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueProjectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="year" 
                tick={{ fontSize: 12 }} 
                stroke="#4A5568"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                label={{ value: 'Revenue (₹ Lakhs)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 12 } }}
                tick={{ fontSize: 12 }}
                stroke="#4A5568"
              />
              <Tooltip 
                formatter={(value, name) => [`₹${value}L`, name]}
                labelFormatter={(label) => `Period: ${label}`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="government" stackId="1" stroke="#1E3A5F" fill="#1E3A5F" name="Government Contracts" />
              <Area type="monotone" dataKey="b2b" stackId="1" stroke="#2C7A7B" fill="#2C7A7B" name="B2B2C Subscriptions" />
              <Area type="monotone" dataKey="premium" stackId="1" stroke="#D4AF37" fill="#D4AF37" name="Premium Individual" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="card-base">
          <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-6 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Year 1 Cost Breakdown
          </h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costBreakdownData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="amount"
                  label={(entry) => `${entry.category}: ₹${entry.amount}L`}
                  labelLine={false}
                >
                  {costBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value} Lakhs`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-base">
          <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-6">Cost Categories Detail</h3>
          <div className="space-y-4">
            {costBreakdownData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="font-medium text-sm">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[var(--color-navy)]">₹{item.amount}L</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Burn Rate Analysis */}
      <div className="card-base mb-12">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-3" />
          Monthly Burn Rate vs Revenue Growth
        </h3>
        {activeView === 'business' && (
          <p className="text-[var(--color-text-secondary)] mb-6">
            Break-even achieved by Month 18 with controlled burn rate and accelerating revenue growth.
          </p>
        )}
        <div className="chart-container-large">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyBurnRateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }} 
                stroke="#4A5568"
              />
              <YAxis 
                label={{ value: 'Amount (₹ Lakhs)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 12 } }}
                tick={{ fontSize: 12 }}
                stroke="#4A5568"
              />
              <Tooltip 
                formatter={(value, name) => [`₹${value}L`, name]}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="burnRate" stroke="#DD6B20" strokeWidth={3} name="Monthly Burn Rate" />
              <Line type="monotone" dataKey="revenue" stroke="#38A169" strokeWidth={3} name="Monthly Revenue" />
              <Line type="monotone" dataKey="netCash" stroke="#1E3A5F" strokeWidth={3} name="Net Cash Flow" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Student Reach Projections */}
      <div className="card-base mb-12">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6 flex items-center">
          <Users className="w-6 h-6 mr-3" />
          Student Reach & Institution Growth
        </h3>
        <div className="chart-container-large">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={studentReachData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="year" 
                tick={{ fontSize: 12 }} 
                stroke="#4A5568"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#4A5568"
              />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'students' ? `${Number(value) * 10}K Students` : `${value} Institutions`,
                  name === 'students' ? 'Students' : 'Institutions'
                ]}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
              />
              <Legend 
                wrapperStyle={{ fontSize: 12 }}
                formatter={(value) => value === 'students' ? 'Students (x10K)' : 'Institutions'}
              />
              <Bar dataKey="students" fill="#2C7A7B" name="students" />
              <Bar dataKey="institutions" fill="#D4AF37" name="institutions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Funding Scenarios */}
      <div className="card-base">
        <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-6 flex items-center">
          <Building className="w-6 h-6 mr-3" />
          Funding Requirements & Scenarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fundingScenarios.map((scenario, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg border-2 ${
                scenario.scenario === 'Recommended' 
                  ? 'border-[var(--color-gold)] bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-gold-light)]/5' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="text-center mb-4">
                <h4 className={`text-lg font-bold ${
                  scenario.scenario === 'Recommended' ? 'text-[var(--color-gold)]' : 'text-[var(--color-navy)]'
                }`}>
                  {scenario.scenario}
                </h4>
                {scenario.scenario === 'Recommended' && (
                  <span className="inline-block bg-[var(--color-gold)] text-white text-xs px-2 py-1 rounded-full mt-1">
                    RECOMMENDED
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-navy)]">₹{scenario.amount}L</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Total Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold text-[var(--color-teal)]">{scenario.runway} Months</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Runway</div>
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] text-center">
                  {scenario.notes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
