import { Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { CarouselItem } from './CarouselItem'

SwiperCore.use([Navigation, Pagination])

export function ContinentsSwiper() {
  return (
    <Swiper navigation pagination className='mySwiper'>
      <SwiperSlide>
        <CarouselItem
          image='/images/northAmerica.jpg'
          title='América do Norte'
          description='Continente mais Desenvolvido'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image='/images/southAmerica.jpg'
          title='América do Sul'
          description='Continente mais Desenvolvido'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image='/images/africa.jpg'
          title='Africa'
          description='Continente mais Feliz'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image='/images/asia.jpg'
          title='Asia'
          description='Continente da sabedoria'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          image='/images/europe.jpg'
          title='Europa'
          description='O continente mais antigo'
        />
      </SwiperSlide>
    </Swiper>
  )
}
