import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface OrigamiStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface OrigamiModel {
  id: string;
  name: string;
  difficulty: string;
  steps: OrigamiStep[];
}

const origamiModels: OrigamiModel[] = [
  {
    id: 'crane',
    name: 'Журавлик',
    difficulty: 'Средний',
    steps: [
      { id: 1, title: 'Базовая складка', description: 'Сложите квадратный лист бумаги по диагонали, затем разверните', image: '📄' },
      { id: 2, title: 'Двойной квадрат', description: 'Сложите еще раз по другой диагонали, создав базу двойного квадрата', image: '◻️' },
      { id: 3, title: 'Складка лепестка', description: 'Выполните складку лепестка с обеих сторон', image: '🔶' },
      { id: 4, title: 'Формирование крыльев', description: 'Разведите складки в стороны для создания крыльев', image: '🦢' },
      { id: 5, title: 'Голова и хвост', description: 'Сформируйте голову и хвост журавлика обратными складками', image: '🕊️' },
    ]
  },
  {
    id: 'boat',
    name: 'Лодочка',
    difficulty: 'Легкий',
    steps: [
      { id: 1, title: 'Складка пополам', description: 'Сложите прямоугольный лист бумаги пополам вдоль', image: '📄' },
      { id: 2, title: 'Углы к центру', description: 'Загните верхние углы к центральной линии', image: '🔺' },
      { id: 3, title: 'Нижние края вверх', description: 'Поднимите нижние края с обеих сторон', image: '⬆️' },
      { id: 4, title: 'Раскрытие лодки', description: 'Аккуратно раскройте середину, формируя лодочку', image: '⛵' },
    ]
  },
  {
    id: 'flower',
    name: 'Цветок',
    difficulty: 'Сложный',
    steps: [
      { id: 1, title: 'Начальная складка', description: 'Сложите квадрат пополам в обе стороны', image: '📄' },
      { id: 2, title: 'Диагональные складки', description: 'Добавьте диагональные складки', image: '❌' },
      { id: 3, title: 'База бомбочки', description: 'Сформируйте базу бомбочки водяной', image: '💎' },
      { id: 4, title: 'Лепестки', description: 'Отогните каждый лепесток наружу', image: '🌸' },
      { id: 5, title: 'Придание формы', description: 'Закруглите лепестки карандашом', image: '🌺' },
    ]
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModel, setSelectedModel] = useState<OrigamiModel | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectModel = (model: OrigamiModel) => {
    setSelectedModel(model);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary font-serif">折り紙 Origami Art</h1>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('history')}
                className={`text-sm transition-colors hover:text-primary ${activeSection === 'history' ? 'text-primary' : 'text-foreground'}`}
              >
                История
              </button>
              <button
                onClick={() => scrollToSection('instructions')}
                className={`text-sm transition-colors hover:text-primary ${activeSection === 'instructions' ? 'text-primary' : 'text-foreground'}`}
              >
                Инструкции
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
                Искусство складывания бумаги
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Откройте для себя древнее японское искусство оригами. Создавайте красоту из простого листа бумаги, следуя пошаговым инструкциям.
              </p>
              <Button 
                onClick={() => scrollToSection('instructions')} 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Начать складывать
                <Icon name="ChevronRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="animate-slide-up relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/66eb2755-ecae-4536-a11c-d2287e029f8d/files/d294625f-cd69-45c3-9676-3035046c5e6a.jpg"
                alt="Origami crane"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-6 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif">История оригами</h2>
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🏯</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 font-serif">Древние корни</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Оригами зародилось в Японии в период Эдо (1603-1867). Слово "оригами" происходит от японских слов 
                      "ори" (складывать) и "ками" (бумага). Первоначально это искусство использовалось в религиозных церемониях 
                      и было доступно только высшим слоям общества из-за высокой стоимости бумаги.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎨</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 font-serif">Символизм и традиции</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Журавлик стал символом оригами и мира во всем мире. Согласно японской легенде, тот, кто сложит 
                      тысячу бумажных журавликов, получит исполнение желания. Эта традиция стала особенно значимой после 
                      истории Садако Сасаки, девочки из Хиросимы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🌏</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 font-serif">Современное оригами</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Сегодня оригами распространилось по всему миру и развилось в различные стили - от традиционного 
                      классического до модульного и мокрого складывания. Мастера создают невероятно сложные фигуры, 
                      используя математические принципы и компьютерное моделирование.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="instructions" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif">Интерактивные схемы складывания</h2>
          
          {!selectedModel ? (
            <div className="grid md:grid-cols-3 gap-6">
              {origamiModels.map((model) => (
                <Card 
                  key={model.id}
                  className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 overflow-hidden"
                  onClick={() => selectModel(model)}
                >
                  <CardContent className="p-6">
                    <div className="text-6xl text-center mb-4">
                      {model.id === 'crane' ? '🦢' : model.id === 'boat' ? '⛵' : '🌸'}
                    </div>
                    <h3 className="text-2xl font-semibold text-center mb-2 font-serif">{model.name}</h3>
                    <p className="text-center text-muted-foreground mb-4">Сложность: {model.difficulty}</p>
                    <p className="text-center text-sm text-muted-foreground">{model.steps.length} шагов</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedModel(null)}
                className="mb-6"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к выбору
              </Button>

              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-2 font-serif">{selectedModel.name}</h3>
                  <p className="text-muted-foreground mb-8">Сложность: {selectedModel.difficulty}</p>

                  <div className="mb-8 p-8 bg-accent/30 rounded-xl text-center">
                    <div className="text-8xl mb-4">{selectedModel.steps[currentStep].image}</div>
                    <h4 className="text-2xl font-semibold mb-3 font-serif">
                      Шаг {currentStep + 1}: {selectedModel.steps[currentStep].title}
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      {selectedModel.steps[currentStep].description}
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center mb-8">
                    <Button
                      onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                      disabled={currentStep === 0}
                      variant="outline"
                    >
                      <Icon name="ChevronLeft" size={20} className="mr-2" />
                      Назад
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(Math.min(selectedModel.steps.length - 1, currentStep + 1))}
                      disabled={currentStep === selectedModel.steps.length - 1}
                    >
                      Далее
                      <Icon name="ChevronRight" size={20} className="ml-2" />
                    </Button>
                  </div>

                  <div className="relative pt-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Прогресс</span>
                      <span className="text-sm font-semibold">
                        {currentStep + 1} / {selectedModel.steps.length}
                      </span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / selectedModel.steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="mt-8">
                    <AccordionItem value="all-steps">
                      <AccordionTrigger className="text-lg font-semibold">
                        Все шаги
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          {selectedModel.steps.map((step, index) => (
                            <button
                              key={step.id}
                              onClick={() => setCurrentStep(index)}
                              className={`w-full text-left p-4 rounded-lg transition-colors ${
                                currentStep === index 
                                  ? 'bg-primary/10 border-2 border-primary' 
                                  : 'bg-accent/20 hover:bg-accent/40'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="text-3xl">{step.image}</div>
                                <div className="flex-1">
                                  <h5 className="font-semibold">Шаг {index + 1}: {step.title}</h5>
                                  <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                                {currentStep === index && (
                                  <Icon name="Check" size={24} className="text-primary" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg font-serif mb-2">折り紙 Origami Art</p>
          <p className="text-sm opacity-80">Древнее искусство складывания бумаги</p>
        </div>
      </footer>
    </div>
  );
}
