import { spawn, SpawnOptions } from "child_process"

import { TerminalExecutor } from "../types"


/**
 * Running command from cmd.
 */
const runCmd: TerminalExecutor = (command: string, terminalArgs, {
    detached = true,
    stdio = 'ignore',
    ...restSpawnOptions
} = {} as SpawnOptions) => {
    let args = ['/k']
    if (terminalArgs) {
        args = [...terminalArgs]
    }

    args.push(command)

    // console.log(args)
    const cmdProcess = spawn('cmd', args, {
        detached,
        stdio,
        ...restSpawnOptions
    })
    return cmdProcess
}

export default runCmd



// // test
// const command = 'node tests/test2.js'
// const cmdProcess = runCmd(command)
// if(!cmdProcess.pid) {
//     throw new Error('cmd not found.')
// }
// cmdProcess.unref()