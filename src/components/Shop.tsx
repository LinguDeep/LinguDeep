import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getShopItems, ShopItem } from '../services/db';
import { getTranslation } from '../services/i18n';
import { Snowflake, Coins, Zap, ShoppingBag, Loader, CheckCircle2, ShieldAlert } from 'lucide-react';

const Shop: React.FC = () => {
  const { userProfile, purchaseItem, interfaceLang, theme } = useAuth();
  const [items, setItems] = useState<ShopItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasingId, setPurchasingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const fetchShop = async () => {
      setLoading(true);
      try {
        const shopData = await getShopItems();
        setItems(shopData);
      } catch (e) {
        console.error('Error fetching shop items', e);
      } finally {
        setLoading(false);
      }
    };

    fetchShop();
  }, []);

  const handleBuy = async (item: ShopItem) => {
    if (!userProfile) return;
    
    // Safety check
    if (userProfile.gems < item.cost) {
      setMessage({ type: 'error', text: getTranslation('insufficientGems', interfaceLang) });
      return;
    }

    setPurchasingId(item.id);
    setMessage(null);

    try {
      await purchaseItem(item.id, item.cost);
      setMessage({ type: 'success', text: `${getTranslation('purchaseSuccess', interfaceLang)} ${item.name}! 🚀` });
    } catch (e: any) {
      console.error(e);
      setMessage({ type: 'error', text: e?.message || 'Failed to complete purchase.' });
    } finally {
      setPurchasingId(null);
    }
  };

  const resolveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake className="w-8 h-8 text-indigo-400" />;
      case 'Coins':
        return <Coins className="w-8 h-8 text-amber-400 fill-amber-500/20" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-orange-400 fill-orange-500/20" />;
      default:
        return <ShoppingBag className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <div className={`max-w-xl mx-auto py-8 px-4 pb-24 md:pb-8 ${
      theme === 'dark' ? 'text-white' : 'text-slate-800'
    }`}>
      {/* Header banner - Solid flat colors (No gradients) */}
      <div className={`text-white rounded-3xl p-6 shadow-md border flex items-center justify-between gap-6 mb-8 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-amber-955 bg-amber-950/60 border-amber-900/40' 
          : 'bg-amber-500 border-amber-600'
      }`}>
        <div className="absolute right-4 bottom-0 opacity-10">
          <ShoppingBag size={120} />
        </div>
        <div className="space-y-1 relative z-10">
          <h2 className={`text-2xl font-outfit font-black tracking-wide ${
            theme === 'dark' ? 'text-amber-300' : 'text-white'
          }`}>{getTranslation('gemsBazaar', interfaceLang)}</h2>
          <p className={`text-xs font-semibold ${
            theme === 'dark' ? 'text-amber-100/70' : 'text-amber-50'
          }`}>{getTranslation('gemsBazaarDesc', interfaceLang)}</p>
        </div>
        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 border border-white/20">
          <Coins className="w-6 h-6 animate-bounce text-amber-300" />
        </div>
      </div>

      {/* Success/Error Toast notification */}
      {message && (
        <div className={`mb-6 p-4 rounded-2xl border flex items-center gap-3 text-sm font-semibold animate-float-subtle ${
          message.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
            : 'bg-rose-500/10 border-rose-500 text-rose-455'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
          <span>{message.text}</span>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`h-28 animate-pulse rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-850' : 'bg-slate-200 border-slate-300'
            }`}></div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className={`text-center py-16 border border-dashed rounded-3xl ${
          theme === 'dark' ? 'border-slate-700 bg-slate-900/40 text-slate-400' : 'border-slate-300 bg-white text-slate-500'
        }`}>
          <ShieldAlert className="w-12 h-12 text-slate-500 mx-auto mb-2" />
          <h3 className="font-outfit font-bold text-lg">Bazaar is empty</h3>
          <p className="text-sm text-slate-500 mt-1">No shop items defined in database.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => {
            const hasPurchased = !!userProfile?.purchasedItems?.includes(item.id);
            const canAfford = (userProfile?.gems || 0) >= item.cost;
            const isPurchasing = purchasingId === item.id;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border gap-4 transition-all ${
                  theme === 'dark'
                    ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/35'
                    : 'border-slate-200 bg-white hover:bg-slate-50 shadow-sm text-slate-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${
                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {resolveIcon(item.icon)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-outfit font-black text-sm">{item.name}</h3>
                    <p className={`text-xs leading-relaxed max-w-sm font-medium ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800">
                  <div className="flex items-center gap-1 text-amber-500 font-outfit font-black text-sm">
                    <Coins className="w-4 h-4 fill-current" />
                    <span>{item.cost}</span>
                  </div>

                  <button
                    onClick={() => handleBuy(item)}
                    disabled={hasPurchased || !canAfford || isPurchasing}
                    className={`px-5 py-2.5 rounded-xl font-outfit font-black text-xs transition-all border-b-4 ${
                      hasPurchased
                        ? 'bg-slate-800 border-slate-900 text-slate-500 cursor-not-allowed border-b-0 translate-y-[2px]'
                        : !canAfford
                          ? theme === 'dark'
                            ? 'bg-slate-850 border-slate-950 text-slate-600 cursor-not-allowed border-b-0 translate-y-[2px]'
                            : 'bg-slate-200 border-slate-300 text-slate-450 cursor-not-allowed border-b-0 translate-y-[2px]'
                          : 'btn-3d-green bg-emerald-600 border-emerald-800 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    {isPurchasing ? (
                      <Loader className="w-4 h-4 animate-spin mx-auto" />
                    ) : hasPurchased ? (
                      getTranslation('owned', interfaceLang)
                    ) : (
                      'Buy'
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
