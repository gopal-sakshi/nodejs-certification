import {spawn } from 'child_process';

const fn23 = () => {
    const childProcessInstance = spawn('node', 
                                    [
                                        'example05_spawn_args_module', 
                                        '1st_arg', 
                                        '2nd_arg'
                                    ], 
                                    { 
                                        shell: true, 
                                        cwd: '/home/vsspl/Desktop/backEnd/nodejs-certification/src/child-processes', 
                                        env: { clubName: 'RealMadrid', stadiumName: 'Santiago Bernabeu' }
                                    }
                                );
    childProcessInstance.stdout.on('data', (data23) => { console.log(data23.toString()); })
}

fn23();