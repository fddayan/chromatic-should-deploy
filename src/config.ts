import * as core from '@actions/core'
import {context} from '@actions/github'

export const githubToken = core.getInput('GITHUB_TOKEN', {required: true})

export const repo = buildRepo()

function buildRepo(): {repo: string; owner: string} {
  return {
    owner: context.repo.owner,
    repo: core.getInput('repo', {required: false}) || context.repo.repo
  }
}
