import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Confirmation = () => {
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
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle2" size={48} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">Заказ подтверждён</h1>
            <p className="text-muted-foreground">Номер заказа: #12345</p>
          </div>

          <Card className="p-8 mb-6">
            <h2 className="text-xl font-semibold mb-6">Детали бронирования</h2>
            <div className="space-y-4">
              <div className="h-24 bg-muted/50 rounded"></div>
              <div className="h-24 bg-muted/50 rounded"></div>
              <div className="h-16 bg-muted/50 rounded"></div>
            </div>
          </Card>

          <Card className="p-8 mb-6">
            <h2 className="text-xl font-semibold mb-6">Пассажиры</h2>
            <div className="space-y-3">
              <div className="h-12 bg-muted/50 rounded"></div>
              <div className="h-12 bg-muted/50 rounded"></div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-xl font-semibold mb-6">Итоговая стоимость</h2>
            <div className="space-y-3">
              <div className="h-8 bg-muted/50 rounded"></div>
              <div className="h-8 bg-muted/50 rounded"></div>
              <div className="border-t pt-3 mt-3">
                <div className="h-10 bg-muted/50 rounded"></div>
              </div>
            </div>
          </Card>
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

export default Confirmation;
