import { spawn } from 'child_process';

const jingChak1 = () => {
    const listFiles1 = spawn('ls');
    const listFiles2 = spawn('pwd');
    const listFiles3 = spawn('echo', ['$(node --version)']);    
    const listFiles4 = spawn('echo', ['gopal', 'krishna']);
    const listFiles5 = spawn('whoami');    
    const listFiles6 = spawn('ping', ['8.8.8.8']);              // spawn('ping 8.8.8.8');       throws ERROR    
    const listFiles7 = spawn('ls', ['-alh']);
    try {
        listFiles1.stdout.on('data', (daataa) => { console.log(`ls ====> ${Buffer.from(daataa).toString()}`); });
        listFiles2.stdout.on('data', (daataa) => { console.log(`pwd ====> ${Buffer.from(daataa).toString()}`); });
        // listFiles3.stdout.on('data', (err, daataa) => { console.log(`${Buffer.from(daataa).toString()}`); });        // used (err, daataa)
        listFiles3.stdout.on('data', (daataa) => { console.log(Buffer.from(daataa).toString()); });
        listFiles4.stdout.on('data', (daataa) => { console.log(`${Buffer.from(daataa).toString()}`); });
        listFiles5.stdout.on('data', (daataa) => { console.log(`whoami ====> ${Buffer.from(daataa).toString()}`); });    
        listFiles6.stdout.on('data', (daataa) => { console.log(`pinging ===> ${Buffer.from(daataa).toString()}`); });
        listFiles7.stdout.on('data', (daataa) => { console.log(`ls -alh ===> ${Buffer.from(daataa).toString()}`); });
    } catch(err) {
        console.log(err);
    }
}
jingChak1();