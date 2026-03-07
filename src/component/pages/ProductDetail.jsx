import { useParams } from 'react-router';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { products, categories } from '../../data/products';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProductDetail = () => {
    const { id } = useParams();
    const productId = parseInt(id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div className="container mx-auto px-4 py-8">Product not found</div>;
    }

    // Calculate price change
    const history = product.priceHistory;
    let priceChange = null;
    if (history.length >= 2) {
        const latest = history[history.length - 1].price;
        const previous = history[history.length - 2].price;
        priceChange = latest - previous;
    }

    // Chart data
    const chartData = {
        labels: history.map(item => new Date(item.date).toLocaleDateString('bn-BD')),
        datasets: [{
            label: 'দাম (টাকা)',
            data: history.map(item => item.price),
            borderColor: 'rgb(34, 197, 94)',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            tension: 0.1
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: `${product.nameBn} - দামের ইতিহাস` }
        }
    };

    // Recent prices for table
    const recentHistory = history.slice(-5);

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            {/* Product Details */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                                <img src={product.image} alt={product.nameBn} className="w-full h-64 object-cover rounded-lg" />
                            </div>
                            <div className="md:w-2/3">
                                <h1 className="text-3xl font-bold mb-2">{product.nameBn}</h1>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{product.nameEn}</p>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl font-bold text-green-600">৳{product.currentPrice}</div>
                                    <div className="text-lg text-gray-600 dark:text-gray-400">/{product.unit}</div>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    {priceChange !== null && (
                                        <span className={`flex items-center gap-1 ${priceChange > 0 ? 'text-red-500' : priceChange < 0 ? 'text-green-500' : 'text-gray-500'}`}>
                                            {priceChange > 0 ? '⬆️' : priceChange < 0 ? '⬇️' : '➡️'}
                                            {priceChange > 0 ? `+৳${priceChange}` : priceChange < 0 ? `৳${Math.abs(priceChange)}` : 'অপরিবর্তিত'}
                                        </span>
                                    )}
                                    <span className="text-sm text-gray-500">সর্বশেষ আপডেট: {new Date().toLocaleDateString('bn-BD')}</span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    <span>ক্যাটাগরি: </span><span>{categories[product.category]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Price History Chart */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">দামের ইতিহাস (গত ৩০ দিন)</h2>
                        <Line data={chartData} options={chartOptions} />
                    </div>

                    {/* Recent Prices Table */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">সাম্প্রতিক দাম (গত ৫ দিন)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b dark:border-gray-600">
                                        <th className="text-left py-2">তারিখ</th>
                                        <th className="text-left py-2">দাম</th>
                                        <th className="text-left py-2">পরিবর্তন</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentHistory.map((item, index) => {
                                        let change = '';
                                        if (index > 0) {
                                            const prevPrice = recentHistory[index - 1].price;
                                            const priceChange = item.price - prevPrice;
                                            if (priceChange > 0) {
                                                change = <span className="text-red-500">+৳{priceChange}</span>;
                                            } else if (priceChange < 0) {
                                                change = <span className="text-green-500">-৳{Math.abs(priceChange)}</span>;
                                            } else {
                                                change = <span className="text-gray-500">—</span>;
                                            }
                                        }
                                        return (
                                            <tr key={item.date} className="border-b dark:border-gray-600">
                                                <td className="py-2">{new Date(item.date).toLocaleDateString('bn-BD')}</td>
                                                <td className="py-2">৳{item.price}</td>
                                                <td className="py-2">{change}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;