import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Plane" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">SkyWings</span>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Корзина</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 opacity-20" />
                  <p className="text-lg">Корзина пуста</p>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-6">Итого</h2>
                <div className="space-y-4">
                  <div className="h-20 bg-muted/50 rounded animate-pulse"></div>
                  <div className="h-12 bg-muted/50 rounded animate-pulse"></div>
                  <div className="h-10 bg-muted/50 rounded animate-pulse"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Компания</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="h-4 bg-muted/50 rounded w-20"></div>
                <div className="h-4 bg-muted/50 rounded w-24"></div>
                <div className="h-4 bg-muted/50 rounded w-16"></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Поддержка</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="h-4 bg-muted/50 rounded w-24"></div>
                <div className="h-4 bg-muted/50 rounded w-20"></div>
                <div className="h-4 bg-muted/50 rounded w-28"></div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="h-4 bg-muted/50 rounded w-32"></div>
                <div className="h-4 bg-muted/50 rounded w-28"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <div className="h-4 bg-muted/50 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
