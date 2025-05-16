'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface ChartData {
  name: string;
  revenue: number;
  sales: number;
}

export default function RevenueSalesChart({ data }: { data: ChartData[] }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-96 p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Total Revenue & Sales</h2>
        <div className="h-[calc(100%-56px)]">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#3A0519" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3A0519" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `${value/ 10}`} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Total Revenue"
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#CB0404"
              fillOpacity={1}
              fill="url(#colorSales)"
              name="Total Sales"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
}
