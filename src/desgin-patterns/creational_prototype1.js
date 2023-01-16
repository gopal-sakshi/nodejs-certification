const atv = {
    make: 'Honda',
    model: 'Rincon 650',
    year: 2018,
    mud: () => { console.log('Mudding'); }
};

const secondATV = Object.create(atv);