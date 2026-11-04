import { Metadata } from 'next'


// 1. НАСТРОЙКА ЗАГОЛОВКА И МЕТАДАННЫХ (Отображается во вкладке браузера)
export const metadata: Metadata = {
  title: 'Фулфилмент BOXPACK | Надежная логистика',
  description: 'Фулфилмент, который держит сроки и репутацию. Комплексные решения для вашего бизнеса.',
}

export default function HomePage() {
  return (
    // Главный контейнер сайта
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* НАВИГАЦИЯ / ХЕДЕР */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-slate-800">
        <div className="text-xl font-bold tracking-wider">BOXPACK</div>
        <nav className="flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-white transition">О нас</a>
          <a href="#advantages" className="hover:text-white transition">Преимущества</a>
          <a href="#steps" className="hover:text-white transition">Как начать</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm transition">
          Войти
        </button>
      </header>

      {/* 2. ГЛАВНЫЙ ЭКРАН (HERO SECTION) */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Левая колонка: Текст и УТП */}
          <div className="space-y-6">
            <span className="text-blue-500 font-semibold uppercase tracking-widest text-xs">
              Надежный фулфилмент-оператор
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Фулфилмент, <br />
              <span className="text-blue-500">который держит</span> <br />
              сроки и репутацию
            </h1>
            <p className="text-slate-400 text-lg">
              Профессиональная обработка заказов, бережное хранение, маркировка и быстрая доставка до маркетплейсов без штрафов и задержек.
            </p>
            <div className="pt-4">
              <a 
                href="#steps" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-blue-600/20 transition inline-block"
              >
                Начать работу
              </a>
            </div>
          </div>

          {/* Правая колонка: Изображение / Интерактивная карточка */}
          <div className="relative bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="absolute -top-3 -left-3 bg-blue-600 text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">
              NEW
            </div>
            
            {/* Блок преимуществ внутри карточки */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg font-bold">⚡</div>
                <div>
                  <h3 className="font-semibold text-sm">Быстрая приемка</h3>
                  <p className="text-xs text-slate-400">Принимаем товар на склад за 24 часа</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-emerald-600/10 text-emerald-500 rounded-lg font-bold">🛡️</div>
                <div>
                  <h3 className="font-semibold text-sm">100% Материальная ответственность</h3>
                  <p className="text-xs text-slate-400">Ваш груз застрахован с момента получения</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. СЕКЦИЯ: КАК НАЧАТЬ РАБОТАТЬ С НАМИ */}
        <section id="steps" className="mt-32 pt-16 border-t border-slate-800/60">
<div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Как начать работать с нами</h2>
            <p className="text-slate-400">Подключение занимает минимум времени и проходит без трудностей</p>
          </div>

          {/* Сетка шагов (Шаг 1, Шаг 2, Шаг 3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition">
              <div className="text-5xl font-black text-slate-700/30 absolute right-4 top-4 group-hover:text-blue-500/20 transition">01</div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Оставить заявку</h3>
              <p className="text-slate-400 text-sm">Заполните простую форму или свяжитесь с нами в мессенджерах для первичного расчета стоимости.</p>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition">
              <div className="text-5xl font-black text-slate-700/30 absolute right-4 top-4 group-hover:text-blue-500/20 transition">02</div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Заключить договор</h3>
              <p className="text-slate-400 text-sm">Фиксируем тарифы, прописываем SLA, сроки и материальную ответственность сторон.</p>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition">
              <div className="text-5xl font-black text-slate-700/30 absolute right-4 top-4 group-hover:text-blue-500/20 transition">03</div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Отгрузить товар</h3>
              <p className="text-slate-400 text-sm">Вы привозите товар к нам на склад или мы забираем его у вашего поставщика собственным автотранспортом.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ФУТЕР */}
      <footer className="mt-32 border-t border-slate-800 text-center py-8 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} BOXPACK. Все права защищены.
      </footer>
    </div>
  )
}