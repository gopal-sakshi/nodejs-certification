import { spawn } from 'child_process';

const jingChak1 = () => {
    const listFiles1 = spawn('ls');
    const listFiles2 = spawn('pwd');
    // const listFiles3 = spawn('echo HALA MADRID');    
    // const listFiles4 = spawn(`${process.pid}`);
    const listFiles5 = spawn('whoami');
    // const listFiles6 = spawn('ping 8.8.8.8');
    // const listFiles7 = spawn('ls -alh');

    listFiles1.stdout.on('data', (daataa) => {
        console.log(`${Buffer.from(daataa).toString()}`);
    });

    listFiles2.stdout.on('data', (daataa) => {
        console.log(`${Buffer.from(daataa).toString()}`);
    });

    // throws ERROR
    // listFiles3.stdout.on('data', (err, daataa) => {
    //     if(err) console.log(err);
    //     console.log(`${Buffer.from(daataa).toString()}`);
    // });


    // throws ERROR
    // listFiles4.stdout.on('data', (daataa) => {
    //     console.log(`${Buffer.from(daataa).toString()}`);
    // });

    listFiles5.stdout.on('data', (daataa) => {
        console.log(`${Buffer.from(daataa).toString()}`);
    });

    // throws ERROR
    // listFiles6.stdout.on('data', (daataa) => {
    //     console.log(`${Buffer.from(daataa).toString()}`);
    // });

    // throws ERROR
    // listFiles7.stdout.on('data', (daataa) => {
    //     console.log(`${Buffer.from(daataa).toString()}`);
    // });
}
jingChak1();