import * as core from '@actions/core'
import * as github from '@actions/github'
import { githubToken, repo } from './config'
// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const octokit = github.getOctokit(githubToken)
    const artifacts = await octokit.request(
      `GET /repos/${repo.owner}/${repo.repo}/actions/artifacts`,
      {
        owner: repo.owner,
        repo: repo.repo
      }
    )

    core.debug(artifacts.data)

    // const ms: string = core.getInput('milliseconds')
    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    // core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
