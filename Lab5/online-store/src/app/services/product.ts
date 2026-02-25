import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Компьютеры' },
    { id: 2, name: 'Одежда' },
    { id: 3, name: 'Аптека' },
    { id: 4, name: 'Мебель' }
  ];

  private products: Product[] = [
    {
      id: 1, categoryId: 1, name: 'Apple MacBook Air 13 2022 13.6"', price: 475000, likes: 0, rating: 5.0,
      description: 'Ноутбук на базе чипа M2, 8 ГБ оперативной памяти и 256 ГБ SSD. Идеален для работы.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h1e/64516252925982.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105514014/',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h1e/64516252925982.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h44/h30/64516255285278.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h03/64516257382430.jpg']
    },
    {
      id: 2, categoryId: 1, name: 'Игровой ноутбук ASUS TUF Gaming A15', price: 395000, likes: 0, rating: 4.8,
      description: 'Мощный ноутбук с процессором Ryzen 7 и видеокартой RTX 4050.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h91/81335352623134.jpg',
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506nc-hn012-90nr0jf7-m000l0-chernyi-111075305/',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h61/h91/81335352623134.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h48/81335352819742.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h5a/hba/81335353081886.jpg']
    },
    { id: 3, categoryId: 1, name: 'Монитор Samsung Odyssey G3', price: 79000, likes: 0, rating: 4.7, description: 'Игровой монитор 24 дюйма с частотой обновления 144 Гц.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/h5a/64380632629278.jpg', link: 'https://kaspi.kz/shop/p/samsung-odyssey-g3-ls24ag300nixci-chernyi-102550186/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h12/h5a/64380632629278.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h32/h75/64380635119646.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h2e/64380637478942.jpg'] },
    { id: 4, categoryId: 1, name: 'Мышь Logitech G102 Lightsync', price: 12500, likes: 0, rating: 4.9, description: 'Классическая игровая мышь с настраиваемой RGB подсветкой.', image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h1a/63947231461406.jpg', link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100356995/', images: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/h1a/63947231461406.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h14/h90/63947234476062.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h71/h14/63947237031966.jpg'] },
    { id: 5, categoryId: 1, name: 'Клавиатура Razer Ornata V3 X', price: 19000, likes: 0, rating: 4.6, description: 'Низкопрофильная эргономичная игровая клавиатура.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h16/65170327371806.jpg', link: 'https://kaspi.kz/shop/p/razer-ornata-v3-x-chernyi-106579051/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h24/h16/65170327371806.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h03/h7e/65170331041822.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h97/h1d/65170334842910.jpg'] },
    {
      id: 6, categoryId: 2, name: 'Футболка Nike Sportswear', price: 15000, likes: 0, rating: 4.8,
      description: 'Классическая хлопковая футболка с логотипом бренда.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h48/64104253325342.jpg',
      link: 'https://kaspi.kz/shop/p/futbolka-nike-ar5004-010-chernyi-104443831/',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h48/64104253325342.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h7a/64104255848478.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h61/h9c/64104258011166.jpg']
    },
    { id: 7, categoryId: 2, name: 'Худи Adidas Essentials', price: 28000, likes: 0, rating: 4.9, description: 'Теплое и удобное худи для повседневной носки.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hbc/84687637872670.jpg', link: 'https://kaspi.kz/shop/p/hudi-adidas-ic9365-chernyi-115250499/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h07/hbc/84687637872670.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h74/ha1/84687637938206.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/had/hf2/84687638003742.jpg'] },
    { id: 8, categoryId: 2, name: 'Кроссовки New Balance 530', price: 42000, likes: 0, rating: 5.0, description: 'Популярная модель в стиле ретро-бега.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/85055054938142.jpg', link: 'https://kaspi.kz/shop/p/krossovki-new-balance-530-belyi-116342084/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/haa/85055054938142.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h3c/85055055003678.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h75/hb1/85055055134750.jpg'] },
    { id: 9, categoryId: 2, name: 'Джинсы Levi\'s 501 Original', price: 35000, likes: 0, rating: 4.7, description: 'Легендарные прямые джинсы из плотного денима.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h85/63768225579038.jpg', link: 'https://kaspi.kz/shop/p/dzhinsy-levi-s-501-original-fit-sinii-100411333/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h97/h85/63768225579038.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hf1/63768225972254.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h8e/63768226234398.jpg'] },
    { id: 10, categoryId: 2, name: 'Куртка The North Face Nuptse', price: 120000, likes: 0, rating: 5.0, description: 'Знаменитый пуховик для экстремальных холодов.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h81/64319803162654.jpg', link: 'https://kaspi.kz/shop/p/pukhovik-the-north-face-nuptse-1996-chernyi-107659771/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h5e/h81/64319803162654.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h1b/he8/64319805653022.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h22/hc0/64319808339998.jpg'] },
    {
      id: 11, categoryId: 3, name: 'Витамин C 1000мг', price: 2500, likes: 0, rating: 4.9,
      description: 'Шипучие таблетки для укрепления иммунитета.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h21/63901416423454.jpg',
      link: 'https://kaspi.kz/shop/p/biovit-vitamin-c-shipuchie-tabletki-20-sht-101181774/',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/h21/63901416423454.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h7a/63901419307038.jpg']
    },
    { id: 12, categoryId: 3, name: 'Омега-3 Fish Oil', price: 4800, likes: 0, rating: 5.0, description: 'Рыбий жир в капсулах для здоровья сердца и мозга.', image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h69/64299388141598.jpg', link: 'https://kaspi.kz/shop/p/doppelherz-aktiv-omega-3-kapsuly-30-sht-7000109/', images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h69/64299388141598.jpg'] },
    { id: 13, categoryId: 3, name: 'Магний B6', price: 3200, likes: 0, rating: 4.8, description: 'Средство для поддержки нервной системы.', image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h57/64303496036382.jpg', link: 'https://kaspi.kz/shop/p/magnelis-v6-tabletki-90-sht-7000570/', images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h57/64303496036382.jpg'] },
    { id: 14, categoryId: 3, name: 'Термометр электронный B.Well', price: 1800, likes: 0, rating: 4.7, description: 'Быстрое и безопасное измерение температуры.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/hc2/63777478082590.jpg', link: 'https://kaspi.kz/shop/p/b-well-wt-03-belyi-7500049/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h97/hc2/63777478082590.jpg'] },
    { id: 15, categoryId: 3, name: 'Антисептик для рук Dettol', price: 950, likes: 0, rating: 4.9, description: 'Убивает 99.9% бактерий и вирусов.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h6b/63812735795230.jpg', link: 'https://kaspi.kz/shop/p/dettol-gel-original-50-ml-100225150/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h6b/63812735795230.jpg'] },
    {
      id: 16, categoryId: 4, name: 'Кресло игровое Cougar Armor One', price: 85000, likes: 0, rating: 4.9,
      description: 'Эргономичное кресло для длительных игровых сессий.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/h62/63891461439518.jpg',
      link: 'https://kaspi.kz/shop/p/cougar-armor-one-chernyi-100342361/',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5c/h62/63891461439518.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h14/63891462488094.jpg']
    },
    { id: 17, categoryId: 4, name: 'Стол компьютерный киберспортивный', price: 42000, likes: 0, rating: 4.8, description: 'Стильный стол с Z-образными ножками и кабель-менеджментом.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/ha4/84687258320926.jpg', link: 'https://kaspi.kz/shop/p/stol-vunsh-komp-juternyi-geimerskii-st-1-120x60x75-sm-chernyi-115248666/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h37/ha4/84687258320926.jpg'] },
    { id: 18, categoryId: 4, name: 'Стеллаж в стиле лофт', price: 25000, likes: 0, rating: 4.7, description: 'Металлический каркас и полки под дерево.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h64/64468494909470.jpg', link: 'https://kaspi.kz/shop/p/stellazh-loft-180x60x30-sm-metall-dsp-chernyi-derevo-105151528/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h64/64468494909470.jpg'] },
    { id: 19, categoryId: 4, name: 'Тумба под ТВ', price: 32000, likes: 0, rating: 4.6, description: 'Современная тумба для гостиной.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h09/84725350858782.jpg', link: 'https://kaspi.kz/shop/p/tumba-pod-televizor-st-01-140x35x40-sm-belyi-115367676/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h98/h09/84725350858782.jpg'] },
    { id: 20, categoryId: 4, name: 'Офисный стул на колесиках', price: 18000, likes: 0, rating: 4.5, description: 'Простой и надежный стул для офиса.', image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/hf9/63762691457054.jpg', link: 'https://kaspi.kz/shop/p/stul-iso-gts-v-4-chernyi-100412401/', images: ['https://resources.cdn-kaspi.kz/img/m/p/h55/hf9/63762691457054.jpg'] }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(id: number): Product[] {
    return this.products.filter(p => p.categoryId === id);
  }
}
