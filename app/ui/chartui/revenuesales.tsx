'use client';

import { Suspense } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { alice } from '../fonts';

interface ChartData {
  name: string;
  revenue: number;
  sales: number;
}

export default function RevenueSalesChart({ data }: { data: ChartData[] }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <Suspense fallback={<div>Loading</div>}>

        <div className="w-full h-96 p-4 bg-white rounded-lg shadow">
          <h2 className={`text-lg font-semibold mb-4 ${alice.className}`}>Total Revenue (Ribu)</h2>
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
              </defs>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value / 1000}`} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip formatter={(value: number) => `${(value as number) / 1000} Rb`} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Total Revenue"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full h-96 p-4 bg-white rounded-lg shadow">
          <h2 className={`text-lg font-semibold mb-4 ${alice.className}`}>Total Sales (Pcs)</h2>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CB0404" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#CB0404" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value}`} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip formatter={(value: number) => `${value} pcs`} />
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

      </Suspense>
    </div>
  );
}
