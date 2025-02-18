import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { BarChartBig, Users, ShoppingCart} from "lucide-react"
import { CheckCircle2 } from 'lucide-react'
import { Headphones } from "lucide-react";


const SurveyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [demographicsTab, setDemographicsTab] = useState('age')
  const [targetAudienceTab, setTargetAudienceTab] = useState<'spending' | 'repurchase' | 'earnings'>('spending');
  const [activeSubTab, setActiveSubTab] = useState('priceSpent');
  const [marketStrategyTab, setMarketStrategyTab] = useState<'purchaseChannel' | 'purchaseFactors'>('purchaseChannel')


  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 bg-gray-900 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Wireless Speaker Market Research Dashboard</h1>
        <p className="text-gray-600">Market Analysis Report 2024</p>
      </div>
      <div style={{ backgroundColor: '#dc2626' }} className="text-white p-6 rounded-lg mb-6 w-full">
  <div className="flex items-center gap-3 mb-3">
    <CheckCircle2 className="h-6 w-6 text-white" />
    <h2 className="text-xl font-bold">Key Insights</h2>
  </div>
  <ul className="list-disc list-inside space-y-2 text-white text-base">
    <li><strong>Market Opportunity:</strong> High demand indicates a market gap for premium speakers.</li>
    <li><strong>Target Audience:</strong> High spenders are both more willing to invest in premium features and more likely to purchase a new speaker in the near future.</li>
    <li><strong>Competitive Landscape:</strong> While brands like Bose, Sony, and JBL dominate, there's a gap for products that combine premium sound with modern aesthetics.</li>
    <li><strong>Consumer Preferences:</strong> Older higher-spending consumers showed a willingness to pay up to $350. The $200-$300 range aligns with the spending patterns of users who value sound quality and are willing to invest in better audio performance.</li>
    <li><strong>Recommendation:</strong> Develop a high-fidelity wireless speaker emphasizing exceptional audio, durability, battery life, and luxury design as these features were valued.</li>
  </ul>
</div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`border px-4 py-2 ${activeTab === 'overview' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          onClick={() => setActiveTab('overview')}
        >
          Usage Overview
        </button>
        <button
          className={`border px-4 py-2 ${activeTab === 'demographics' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          onClick={() => setActiveTab('demographics')}
        >
          Demographics
        </button>
        <button
      className={`border px-4 py-2 ${
      activeTab === 'targetAudience' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'
      }`}
      onClick={() => setActiveTab('targetAudience')}
      >
      Target Audience
      </button>
      <button
    className={`border px-4 py-2 ${activeTab === 'features' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
    onClick={() => setActiveTab('features')}
    >
    Features
      </button>
      <button
    className={`border px-4 py-2 ${activeTab === 'pricing' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
    onClick={() => setActiveTab('pricing')}
  >
    Pricing
  </button>
  <button
  className={`border px-4 py-2 ${activeTab === 'marketStrategy' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
  onClick={() => setActiveTab('marketStrategy')}
>
  Market Strategy
</button>
<button
  onClick={() => setActiveTab('Brand Market Share')}
  className={activeTab === 'Brand Market Share' ? 'bg-white text-black px-4 py-2 rounded' : 'bg-black text-white px-4 py-2 rounded'}
>
  Brand Market Share
</button>

      </div>

      {/* Usage Overview Chart */}
      {activeTab === 'overview' && (
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChartBig className="h-5 w-5 text-red-600" />
            Usage Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { frequency: 'Several times a week', percentage: 35.1 },
              { frequency: 'Daily', percentage: 28.91 },
              { frequency: '1-3 times a month', percentage: 13.91 },
              { frequency: 'Rarely', percentage: 11.8 },
              { frequency: 'Once a week', percentage: 10.28 }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="frequency" tick={{ fill: 'white' }} />
            <YAxis tick={{ fill: 'white' }} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#E01E3C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-sm text-gray-300">
       Most users (over 64%) use their wireless speakers either daily or several times a week, indicating high product engagement.
      </p>
      </CardContent>
    </Card>
      )}

      {activeTab === 'demographics' && (
      <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-red-600" />
          Demographics
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Sub-tabs for Demographics */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`border px-4 py-2 ${demographicsTab === 'age' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          onClick={() => setDemographicsTab('age')}
        >
          Age Distribution
        </button>
        <button
          className={`border px-4 py-2 ${demographicsTab === 'gender' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          onClick={() => setDemographicsTab('gender')}
        >
          Gender Distribution
        </button>
        <button
          className={`border px-4 py-2 ${demographicsTab === 'income' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          onClick={() => setDemographicsTab('income')}
        >
          Income Level
        </button>
      </div>

      {/* Age Distribution Chart */}
      {demographicsTab === 'age' && (
        <div style={{ width: '100%', height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
              formatter={(value, name) => {
              const percentageMap: { [key: string]: string } = {
                'Under 18': '4.27%',
                '18-24': '69.94%',
                '25-34': '17.25%',
                '35-44': '3.64%',
                '45-54': '3.3%',
               '55-64': '1.37%',
              '65+': '0.22%',
               }
               return percentageMap[name] || value
             }}
              />
              <Pie
              data={[
            { name: 'Under 18', value: 4 },
            { name: '18-24', value: 71 },
            { name: '25-34', value: 17 },
            { name: '35-44', value: 4 },
            { name: '45-54', value: 3 },
            { name: '55-64', value: 1 },
            { name: '65+', value: 0 },
          ]}
          cx="50%"
          cy="50%"
          outerRadius={110}
          dataKey="value"
          labelLine={false}
          label={({ name }) => {
            const percentageMap: { [key: string]: string } = {
              'Under 18': '4%',
              '18-24': '70%',
              '25-34': '17%',
              '35-44': '4%',
              '45-54': '3%',
              '55-64': '1%',
              '65+': '0%',
            }
            return percentageMap[name] || ''
          }}
          
        >
          <Cell fill="#EF4444" />
          <Cell fill="#F97316" />
          <Cell fill="#14B8A6" />
          <Cell fill="#3B82F6" />
          <Cell fill="#9333EA" />
          <Cell fill="#64748B" />
          <Cell fill="#A3E635" />
          </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-300">
            The majority of respondents (69.9%) are aged 18-24, making up over two-thirds of the sample.
          </p>
        </div>
      )}

      {/* Gender Distribution Chart */}
      {demographicsTab === 'gender' && (
      <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip
          formatter={(value, name) => {
            const percentageMap: { [key: string]: string } = {
              Male: '44.64%',
              Female: '52.62%',
              'Non-Binary/Third Gender': '1.19%',
              'Prefer Not To Say': '1.56%',
            }
            return percentageMap[name] || value
          }}
        />
        <Pie
          data={[
            { name: 'Male', value: 44.64 },
            { name: 'Female', value: 52.62 },
            { name: 'Non-Binary/Third Gender', value: 1.19 },
            { name: 'Prefer Not To Say', value: 1.56 },
          ]}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label={({ name }) => {
            const percentageMap: { [key: string]: string } = {
              Male: '45%',
              Female: '53%',
              'Non-Binary/Third Gender': '1%',
              'Prefer Not To Say': '2%',
            }
            return percentageMap[name] || ''
          }}
        >
          <Cell fill="#3B82F6" />
          <Cell fill="#F43F5E" />
          <Cell fill="#D946EF" />
          <Cell fill="#FACC15" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <p className="mt-4 text-sm text-gray-300">
      The gender distribution shows a slight female majority at 52.6%, with males at 44.6%.
    </p>
  </div>
    )}


      {/* Income Level Chart */}
      {demographicsTab === 'income' && (
  <div style={{ width: '100%', height: '300px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={[
          { income: 'Under $25,000', percentage: 22.4 },
          { income: '$25,000-$50,000', percentage: 13.1 },
          { income: '$50,000-$75,000', percentage: 9.9 },
          { income: '$75,000-$100,000', percentage: 8.5 },
          { income: 'More than $100,000', percentage: 14.8 },
          { income: 'Prefer not to say', percentage: 31.3 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="income" tick={{ fill: 'white' }} />
        <YAxis tick={{ fill: 'white' }} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Bar dataKey="percentage" fill="#E01E3C" />
      </BarChart>
    </ResponsiveContainer>
    <p className="mt-4 text-sm text-gray-300">
      Income distribution varies widely, with 31.3% preferring not to disclose and 22.4% reporting income under $25,000.
    </p>
  </div>
)}
    </CardContent>
  </Card>
)}
      {activeTab === 'targetAudience' && (
  <Card>
    <CardHeader>
      <CardTitle>Target Audience Insights</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${targetAudienceTab === 'spending' ? 'bg-white text-black' : 'bg-black text-white border border-white'}`}
          onClick={() => setTargetAudienceTab('spending')}
        >
          Spending by Age
        </button>
        <button
          className={`px-4 py-2 rounded ${targetAudienceTab === 'repurchase' ? 'bg-white text-black' : 'bg-black text-white border border-white'}`}
          onClick={() => setTargetAudienceTab('repurchase')}
        >
          Repurchase Likelihood
        </button>
        <button
          className={`px-4 py-2 rounded ${targetAudienceTab === 'earnings' ? 'bg-white text-black' : 'bg-black text-white border border-white'}`}
          onClick={() => setTargetAudienceTab('earnings')}
        >
          Earnings by Age
        </button>
      </div>

      {targetAudienceTab === 'spending' && (
        <div>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { age: 'Under 18', value: 83.48 },
                  { age: '18-24', value: 87.78 },
                  { age: '25-34', value: 87.33 },
                  { age: '35-44', value: 87.22 },
                  { age: '45-54', value: 129.52 },
                  { age: '55-64', value: 126.43 },
                  { age: '65 and over', value: 93.75 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" tick={{ fill: 'white' }} />
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="value" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Among respondents who reported their income, older, higher earners spent more on average for their wireless speakers.
          </p>
        </div>
      )}

      {targetAudienceTab === 'repurchase' && (
        <div>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={[
                  { age: 'Under 18', value: 2.37 },
                  { age: '18-24', value: 2.3 },
                  { age: '25-34', value: 2.46 },
                  { age: '35-44', value: 2.52 },
                  { age: '45-54', value: 2.71 },
                  { age: '55-64', value: 2.08 },
                  { age: '65 and over', value: 1.83 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fill: 'white' }} />
                <YAxis dataKey="age" type="category" tick={{ fill: 'white' }} />
                <Tooltip />
                <Bar dataKey="value" fill="#E01E3C" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            While the survey respondents highly consist of those in the Gen Z age range, the analysis showed that those more likely to repurchase a wireless speaker in the next 12 months were 45+.
          </p>
        </div>
      )}

      {targetAudienceTab === 'earnings' && (
        <div>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { age: 'Under 18', value: 69852.94 },
                  { age: '18-24', value: 55342.66 },
                  { age: '25-34', value: 52284.6 },
                  { age: '35-44', value: 69520.55 },
                  { age: '45-54', value: 96828.36 },
                  { age: '55-64', value: 94791.67 },
                  { age: '65 and over', value: 115625 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" tick={{ fill: 'white' }} />
                <YAxis tick={{ fill: 'white' }} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="value" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Respondents who spent more on wireless speakers were high earners age 45+.
          </p>
        </div>
      )}
    </CardContent>
  </Card>
)}

{activeTab === 'features' && (
  <Card>
    <CardHeader>
      <CardTitle>Feature Importance Ratings</CardTitle>
    </CardHeader>
    <CardContent>
      <div style={{ width: '100%', height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              { feature: 'Sound quality', value: 3.65 },
              { feature: 'Battery life', value: 3.61 },
              { feature: 'Design/Looks', value: 3.36 },
              { feature: 'Connectivity options', value: 3.49 },
              { feature: 'Durability', value: 3.4 },
              { feature: 'Price', value: 3.52 },
            ]}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fill: 'white' }} />
            <YAxis dataKey="feature" type="category" tick={{ fill: 'white' }} />
            <Tooltip />
            <Bar dataKey="value" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-sm text-gray-300">
        Sound quality and battery life are rated as the most important features by users, followed closely by price and connectivity options.
      </p>
    </CardContent>
  </Card>
)}
    
    {activeTab === 'pricing' && (
  <>
    <div className="flex space-x-4 mb-4">
      <button
        className={`px-4 py-2 ${activeSubTab === 'priceSpent' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
        onClick={() => setActiveSubTab('priceSpent')}
      >
        Price Spent
      </button>
      <button
        className={`px-4 py-2 ${activeSubTab === 'spendingByIncome' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
        onClick={() => setActiveSubTab('spendingByIncome')}
      >
        Spending by Income
      </button>
    </div>

    {activeSubTab === 'priceSpent' && (
      <Card>
        <CardHeader>
          <CardTitle>Price Range Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { range: '$24.67-$90', users: 1791 },
                  { range: '$90-$155', users: 639 },
                  { range: '$155-$220', users: 0 },
                  { range: '$220-$285', users: 176 },
                  { range: '$285-$350', users: 89 },
                ]}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fill: 'white' }} />
                <YAxis dataKey="range" type="category" tick={{ fill: 'white' }} />
                <Tooltip />
                <Bar dataKey="users" fill="#E01E3C" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Most respondents spent between $25-$90 on their current speakers, with consumers showing a willingness to pay up to $350.
          </p>
        </CardContent>
      </Card>
    )}
        {activeSubTab === 'spendingByIncome' && (
      <Card>
        <CardHeader>
          <CardTitle>Average Price Spent by Income Group</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { income: 'Less than $25,000', spent: 66.3 },
                  { income: '$25,000-$50,000', spent: 87.32 },
                  { income: '$50,000-$75,000', spent: 101.04 },
                  { income: '$75,000-$100,000', spent: 110.23 },
                  { income: 'More than $100,000', spent: 111.38 },
                  { income: 'Prefer not to say', spent: 87.73 },
                ]}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fill: 'white' }} />
                <YAxis dataKey="income" type="category" tick={{ fill: 'white' }} />
                <Tooltip />
                <Bar dataKey="spent" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            The average price spent across the board was $97.67, with a higher median price of $75. Older, higher-earning consumers spent more on wireless speaker products.
          </p>
        </CardContent>
      </Card>
    )}
  </>
)}

      {activeTab === 'marketStrategy' && (
        <Card>
        <CardHeader>
        <CardTitle className="flex items-center gap-2">
  <     ShoppingCart className="h-5 w-5 text-red-600" />
          Market Strategy
        </CardTitle>
        </CardHeader>
        <CardContent>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${marketStrategyTab === 'purchaseChannel' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          onClick={() => setMarketStrategyTab('purchaseChannel')}
        >
          Purchase Channel
        </button>
        <button
          className={`px-4 py-2 ${marketStrategyTab === 'purchaseFactors' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          onClick={() => setMarketStrategyTab('purchaseFactors')}
        >
          Purchase Decision Factors
        </button>
      </div>

      {marketStrategyTab === 'purchaseChannel' && (
        <div style={{ width: '100%', height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={[
                { channel: 'Large multi-brand stores (e.g., Amazon)', percentage: 46.6 },
                { channel: 'Multi-brand electronics stores', percentage: 20.3 },
                { channel: 'Department stores', percentage: 17.7 },
                { channel: 'Brand websites', percentage: 13.3 },
                { channel: 'Gifted', percentage: 0.1 },
                { channel: 'All others (Combined)', percentage: 2.0 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fill: 'white' }} />
              <YAxis dataKey="channel" type="category" tick={{ fill: 'white' }} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="percentage" fill="#E01E3C" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-300">
            Amazon and other large multi-brand stores are the most preferred channels, followed by physical electronics stores. Brand websites are less favored for purchases but remain an important option for those seeking direct-from-brand purchases.
          </p>
        </div>
      )}

      {marketStrategyTab === 'purchaseFactors' && (
        <div style={{ width: '100%', height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={[
                { factor: 'Recommendations', rating: 3.16 },
                { factor: 'Online Reviews', rating: 3.38 },
                { factor: 'Expert Reviews', rating: 3.31 },
                { factor: 'Brand Reputation', rating: 3.52 },
                { factor: 'Price', rating: 3.55 },
                { factor: 'Specific Features', rating: 3.25 },
                { factor: 'Advertising', rating: 2.67 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fill: 'white' }} />
              <YAxis dataKey="factor" type="category" tick={{ fill: 'white' }} />
              <Tooltip />
              <Bar dataKey="rating" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-sm text-gray-300">
            Price and Brand Reputation are seen as the most important factors influencing purchase decisions, followed by online and expert reviews.
          </p>
        </div>
      )}
    </CardContent>
  </Card>
)}
    {activeTab === 'Brand Market Share' && (
  <Card>
    <CardHeader>
      <Headphones size={24} />
      <CardTitle>Brand Market Share</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={[
          { brand: 'JBL', respondents: 1704 },
          { brand: 'Beats', respondents: 63 },
          { brand: 'Bose', respondents: 879 },
          { brand: 'Samsung', respondents: 394 },
          { brand: 'Sony', respondents: 660 },
          { brand: 'Marshall', respondents: 726 },
          { brand: 'Other', respondents: 0 }
        ]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="brand" style={{ fill: 'white' }} />
          <YAxis style={{ fill: 'white' }} />
          <Tooltip />
          <Bar dataKey="respondents" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm mt-2">
        Beats by Dre listed among the brands mentioned by respondents.
      </p>
    </CardContent>
  </Card>
)}

</div>
 
  )}
export default SurveyDashboard



