/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const config = require('../../../config');
const EXAMPLES = require('../../examples');
const OPTIONS = require('../../../options');

const EPILOGUE = `Available configuration options:

  ${'GLOBAL'.underline} - Settings used by all components.
    ${'projectId'.bold}
      ${OPTIONS.projectId.description}

    ${'region'.bold}
      ${OPTIONS.region.description}

  ${'EMULATOR'.underline} - Emulates the Cloud Functions API.
    ${'grpcHost'.bold}
      ${OPTIONS.grpcHost.description}

    ${'grpcPort'.bold}
      ${OPTIONS.grpcPort.description}

    ${'logFile'.bold}
      ${OPTIONS.logFile.description}

    ${'restHost'.bold}
      ${OPTIONS.restHost.description}

    ${'restPort'.bold}
      ${OPTIONS.restPort.description}

    ${'runSupervisor'.bold}
      ${OPTIONS.runSupervisor.description}

    ${'verbose'.bold}
      ${OPTIONS.verbose.description}

  ${'CLI'.underline} - Manages the Emulator.
    ${'service'.bold}
      ${OPTIONS.service.description}

    ${'timeout'.bold}
      ${OPTIONS.timeout.description}

  ${'SUPERVISOR'.underline} - Responsible for invoking functions.
    ${'debug'.bold}
      ${OPTIONS.debug.description}

    ${'debugPort'.bold}
      ${OPTIONS.debugPort.description}

    ${'inspect'.bold}
      ${OPTIONS.inspect.description}

    ${'inspectPort'.bold}
      ${OPTIONS.inspectPort.description}

    ${'isolation'.bold}
      ${OPTIONS.isolation.description}

    ${'supervisorHost'.bold}
      ${OPTIONS.supervisorHost.description}

    ${'supervisorPort'.bold}
      ${OPTIONS.supervisorPort.description}

    ${'useMocks'.bold}
      ${OPTIONS.useMocks.description}
`;
const COMMAND = `functions config ${'<command>'.yellow} ${'[options]'.yellow}`;
const DESCRIPTION = `Manages the settings stored in ${config.path.bold}.`;
const USAGE = `Usage:
  ${COMMAND.bold}

Description:
  ${DESCRIPTION} Run ${('functions config ' + '<command>'.yellow + ' --help').bold} to print additional help for a command.

Positional arguments:
  ${'command'.bold}
    The ${'config'.bold} command to execute.`;

/**
 * http://yargs.js.org/docs/#methods-commandmodule-providing-a-command-module
 */
exports.command = 'config <command>';
exports.description = DESCRIPTION;
exports.builder = (yargs) => {
  yargs
    .usage(USAGE)
    .demand(1)
    .command(require('./list'))
    .command(require('./set'))
    .epilogue(EPILOGUE);

  EXAMPLES['config'].forEach((e) => yargs.example(e[0], e[1]));
};
exports.helpMessage = `Run ${'functions config --help'.bold} for a description of the available configuration options.`;
exports.handler = () => {};
