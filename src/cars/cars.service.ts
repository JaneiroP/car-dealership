import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {   
            id:1,
            brand:'Toyota',
            Model:'Corolla'
        },
        {   
            id:2,
            brand:'Honda',
            Model:'Civic'
        },
        {   
            id:3,
            brand:'Jeep',
            Model:'Cheeroke'
        },
    ];


    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id === id);

        if( !car ){
            throw new NotFoundException(`Car with id '${id}' not found `);
        }
        return car;
    }
}
