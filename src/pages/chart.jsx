
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		const fetchData = async () => {
			try {
				const res = await fetch(
					'https://live-stock-market.p.rapidapi.com/v1/stock/chart?symbol=TSLA&interval=1d&period1=1399827600&period2=1709176300&range=ytd&region=US',
					{
						method: 'GET',
						headers: {
							'x-rapidapi-host': 'live-stock-market.p.rapidapi.com',
							'x-rapidapi-key': 'ea8e030b3bmshcb26c1fe74b39f6p145829jsn276d9de62717',
						},
					}
				);
				if (!res.ok) throw new Error('Network response was not ok');
				const json = await res.json();
				setData(json);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const chartData = data?.data?.chart?.result?.[0];
	const timestamps = chartData?.timestamp || [];
	const indicators = chartData?.indicators?.quote?.[0] || {};

		function formatDate(ts) {
			const d = new Date(ts * 1000);
			const day = d.getDate().toString().padStart(2, '0');
			const month = d.toLocaleString('en-US', { month: 'short' });
			const year = d.getFullYear();
			return `${day} ${month} ${year}`;
		}

	const meta = chartData?.meta || {};
	const symbol = meta.symbol || '-';
	const name = meta.longName || meta.shortName || symbol;

	return (
		<div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
			{!loading && !error && chartData && (
				<div className="mb-6 p-4 rounded-xl shadow-lg bg-gradient-to-br from-[#181c2f] to-[#232946] border border-[#232946] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-2">
					<div>
						<div className="text-lg md:text-2xl font-bold tracking-wide text-[#facc15]">{name}</div>
						<div className="text-xs md:text-sm text-[#a5b4fc]">Symbol: <span className="font-semibold text-[#facc15]">{symbol}</span></div>
					</div>
					<div className="flex flex-wrap gap-4 text-xs md:text-sm mt-2 md:mt-0">
						<div><span className="text-[#facc15] font-semibold">Currency:</span> {meta.currency || '-'}</div>
						<div><span className="text-[#facc15] font-semibold">Exchange:</span> {meta.exchangeName || meta.fullExchangeName || '-'}</div>
						<div><span className="text-[#facc15] font-semibold">Type:</span> {meta.instrumentType || '-'}</div>
						<div><span className="text-[#facc15] font-semibold">Timezone:</span> {meta.timezone || meta.exchangeTimezoneName || '-'}</div>
						<div><span className="text-[#facc15] font-semibold">52W High:</span> {meta.fiftyTwoWeekHigh ?? '-'}</div>
						<div><span className="text-[#facc15] font-semibold">52W Low:</span> {meta.fiftyTwoWeekLow ?? '-'}</div>
						<div><span className="text-[#facc15] font-semibold">Market Price:</span> {meta.regularMarketPrice ?? '-'}</div>
					</div>
				</div>
			)}
			<h2 className="text-2xl font-bold mb-4 text-[#facc15] drop-shadow">Trading Chart (YTD)</h2>
			{loading && <div className="text-white">Loading...</div>}
			{error && <div className="text-red-400">Error: {error}</div>}
			{!loading && !error && chartData && (
				<div className="mb-8 bg-gradient-to-br from-[#181c2f] to-[#232946] p-2 sm:p-6 rounded-2xl shadow-2xl border border-[#232946]">
					<div className="w-full h-[40vw] min-h-[250px] max-h-[70vh]">
						<Line
							data={{
								labels: timestamps.map(formatDate),
								datasets: [
									{
										label: 'Open',
										data: indicators.open,
										borderColor: '#00e3ff',
										backgroundColor: 'transparent',
										borderWidth: 3,
										pointRadius: 4,
										pointHoverRadius: 7,
										pointStyle: 'circle',
										fill: false,
										tension: 0.3,
									},
									{
										label: 'High',
										data: indicators.high,
										borderColor: '#ffb300',
										backgroundColor: 'transparent',
										borderWidth: 3,
										pointRadius: 4,
										pointHoverRadius: 7,
										pointStyle: 'rectRot',
										fill: false,
										tension: 0.3,
									},
									{
										label: 'Low',
										data: indicators.low,
										borderColor: '#ff3b6b',
										backgroundColor: 'transparent',
										borderWidth: 3,
										pointRadius: 4,
										pointHoverRadius: 7,
										pointStyle: 'triangle',
										fill: false,
										tension: 0.3,
									},
									{
										label: 'Close',
										data: indicators.close,
										borderColor: '#7c3aed',
										backgroundColor: 'transparent',
										borderWidth: 3,
										pointRadius: 4,
										pointHoverRadius: 7,
										pointStyle: 'rect',
										fill: false,
										tension: 0.3,
									},
									{
										label: 'Volume',
										data: indicators.volume,
										borderColor: '#fbbf24',
										backgroundColor: 'transparent',
										borderWidth: 2,
										pointRadius: 3,
										pointHoverRadius: 6,
										pointStyle: 'star',
										fill: false,
										tension: 0.3,
										yAxisID: 'y1',
									},
								],
							}}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								plugins: {
									legend: {
										display: true,
										position: 'top',
										labels: {
											color: '#facc15',
											font: { size: 15, weight: 'bold' },
											padding: 20,
										},
									},
									title: {
										display: true,
										text: `${name} (${symbol}) Market Data`,
										color: '#facc15',
										font: { size: 22, weight: 'bold' },
										padding: { top: 10, bottom: 30 },
									},
									tooltip: {
										enabled: true,
										backgroundColor: '#232946',
										titleColor: '#facc15',
										bodyColor: '#fff',
										borderColor: '#facc15',
										borderWidth: 1,
										padding: 14,
									},
								},
								scales: {
									x: {
										title: { display: true, text: 'Date', color: '#facc15', font: { size: 15, weight: 'bold' } },
										ticks: { maxTicksLimit: 10, color: '#a5b4fc', font: { size: 13 } },
										grid: { color: 'rgba(250,204,21,0.08)' },
									},
									y: {
										title: { display: true, text: 'Price', color: '#facc15', font: { size: 15, weight: 'bold' } },
										beginAtZero: false,
										ticks: { color: '#22d3ee', font: { size: 13 } },
										grid: { color: 'rgba(34,211,238,0.08)' },
									},
									y1: {
										type: 'linear',
										display: true,
										position: 'right',
										title: { display: true, text: 'Volume', color: '#fbbf24', font: { size: 15, weight: 'bold' } },
										grid: { drawOnChartArea: false },
										ticks: { color: '#fbbf24', font: { size: 13 } },
									},
								},
							}}
						/>
					</div>
				</div>
			)}
			{!loading && !error && !chartData && (
				<div className="text-white">No data available.</div>
			)}
			{/* Debug: Show raw JSON if needed */}
			{/* <pre className="mt-4 text-xs bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre> */}
		</div>
	);
}
