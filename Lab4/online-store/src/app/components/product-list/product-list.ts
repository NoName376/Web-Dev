import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 Pro 128Gb черный',
      price: 545000,
      description: 'Флагманский смартфон с титановым корпусом, мощным процессором A17 Pro и продвинутой камерой.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/83059541147678.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138184/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/83059541147678.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h77/83059541180446.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h3b/83059541245982.png?format=gallery-medium'
      ]
    },
    {
      id: 2,
      name: 'Наушники Sony WH-1000XM5 черный',
      price: 155000,
      description: 'Лучшее в индустрии шумоподавление и кристально чистый звук для ценителей музыки.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h78/64478345723934.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221406/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h89/h78/64478345723934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h13/64478348345374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h2b/64478351097886.jpg?format=gallery-medium'
      ]
    },
    {
      id: 3,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      price: 245000,
      description: 'Обновленная тонкая версия самой популярной консоли с SSD на 1ТБ.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h49/84515516088350.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696085/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h49/84515516088350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h0e/84515516121118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h06/84515516153886.jpg?format=gallery-medium'
      ]
    },
    {
      id: 4,
      name: 'Клавиатура Logitech G Pro X TKL черный',
      price: 85000,
      description: 'Механическая игровая клавиатура, созданная при участии профессиональных киберспортсменов.',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/84105151545374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-tkl-lightspeed-tkl-chernyi-113554460/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/84105151545374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hea/84105151610910.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/h21/84105151676446.jpg?format=gallery-medium'
      ]
    },
    {
      id: 5,
      name: 'Квадрокоптер DJI Mini 4 Pro Fly More Combo',
      price: 590000,
      description: 'Компактный дрон с камерой 4K, системой обхода препятствий и долгим временем полета.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hd8/83944747761694.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dji-mini-4-pro-fly-more-combo-dji-rc-2-seryi-113398934/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h93/hd8/83944747761694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/ha0/83944747827230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hf7/83944747958302.jpg?format=gallery-medium'
      ]
    },
    {
      id: 6,
      name: 'Кофемашина DeLonghi Magnifica S черный',
      price: 185000,
      description: 'Автоматическая кофемашина для приготовления идеального эспрессо и капучино дома.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h14/63901633183774.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-s-ecam-22-110-b-chernyi-2800164/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h14/63901633183774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h62/63901635313694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h14/63901637738526.jpg?format=gallery-medium'
      ]
    },
    {
      id: 7,
      name: 'Увлажнитель воздуха Xiaomi Mi Smart Humidifier 2',
      price: 24000,
      description: 'Умный увлажнитель с антибактериальной обработкой воды и управлением со смартфона.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h52/h64/65315518414878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-smart-humidifier-2-belyi-107050013/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h64/65315518414878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h30/65315520315422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/hc6/65315521953822.jpg?format=gallery-medium'
      ]
    },
    {
      id: 8,
      name: 'Яндекс Станция Миди с Алисой черный',
      price: 75000,
      description: 'Умная колонка с нейронным процессором, мощным звуком и Zigbee хабом для умного дома.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h17/84444583198750.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yandeks-stantsija-midi-chernyi-114441589/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h26/h17/84444583198750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h0e/84444583264286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5f/h94/84444583329822.jpg?format=gallery-medium'
      ]
    },
    {
      id: 9,
      name: 'Конструктор LEGO Icons Букет цветов',
      price: 28000,
      description: 'Потрясающий набор для сборки реалистичного букета цветов из деталей LEGO.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc8/64010376740894.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lego-icons-buket-tsvetov-1028-det-101165604/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc8/64010376740894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/ha1/64010379264030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h61/64010381623326.jpg?format=gallery-medium'
      ]
    },
    {
      id: 10,
      name: 'Пылесос Dyson V15 Detect Absolute',
      price: 385000,
      description: 'Самый мощный беспроводной пылесос с лазерной подсветкой пыли и умной насадкой.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h30/64400494002206.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-105016531/',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h30/64400494002206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h52/64400496197662.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/ha0/64400502161438.jpg?format=gallery-medium'
      ]
    }
  ];
}
