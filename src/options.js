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

const _ = require('lodash');
const os = require('os');

const defaults = require('./defaults.json');
defaults.location = _.kebabCase(os.userInfo().username);
const detectProjectId = require('./utils/project');

const PROJECT_ID = detectProjectId();

module.exports = {
  /**
   * Global settings
   */
  projectId: {
    description: 'Your Google Cloud Platform project ID.' + (PROJECT_ID ? ` ${'Default:'.bold} ${PROJECT_ID.green}` : ''),
    requiresArg: true,
    type: 'string'
  },
  location: {
    description: `A location identifier for functions, maps to "regions" in the production service. ${'Default:'.bold} ${defaults.location.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  storage: {
    description: `The only choice right now is ${'configstore'.green}. ${'Default:'.bold} ${defaults.storage.toString().green}`,
    requiresArg: true,
    type: 'string'
  },

  /**
   * CLI settings
   */
  service: {
    description: `Which wire protocol to use when communicating with the Emulator. Choices are ${'rest'.green} or ${'grpc'.green}. ${'Default:'.bold} ${defaults.service.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  timeout: {
    description: `The timeout in milliseconds the CLI should wait for the Emulator to start or stop. ${'Default:'.bold} ${defaults.timeout.toString().green}`,
    requiresArg: true,
    type: 'number'
  },

  /**
   * Emulator settings
   */
  grpcHost: {
    description: `The host of the Cloud Functions Emulator gRPC API. ${'Default:'.bold} ${defaults.grpcHost.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  grpcPort: {
    description: `The port of the Cloud Functions Emulator gRPC API. ${'Default:'.bold} ${defaults.grpcPort.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  logFile: {
    description: `The path to the logs file to which function logs will be written. ${'Default:'.bold} ${defaults.logFile.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  restHost: {
    description: `The host of the Cloud Functions Emulator REST API. ${'Default:'.bold} ${defaults.restHost.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  restPort: {
    description: `The port of the Cloud Functions Emulator REST API. ${'Default:'.bold} ${defaults.restPort.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  runSupervisor: {
    description: `When ${'true'.bold}, runs the Supervisor as part of the Emulator. ${'Default:'.bold} ${defaults.runSupervisor.toString().green}`,
    requiresArg: false,
    type: 'boolean'
  },
  verbose: {
    description: `When ${'true'.bold}, shows debug logs from the Emulator itself in the log file. ${'Default:'.bold} ${defaults.verbose.toString().green}`,
    requiresArg: false,
    type: 'boolean'
  },

  /**
   * Supervisor settings
   */
  debug: {
    description: `When ${'true'.bold}, enables the Node.js Debugger for function invocations. ${'Default:'.bold} ${defaults.debug.toString().green}`,
    type: 'boolean',
    requiresArg: false
  },
  debugPort: {
    description: `The port for the Node.js Debugger. ${'Default:'.bold} ${defaults.debugPort.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  inspect: {
    description: `When ${'true'.bold}, enables the Node.js Inspector for function invocations. ${'Default:'.bold} ${defaults.inspect.toString().green}`,
    type: 'boolean',
    requiresArg: false
  },
  inspectPort: {
    description: `The port for the Node.js Inspector. ${'Default:'.bold} ${defaults.inspectPort.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  isolation: {
    description: `The Supervisor's isolation model. Choices are ${'inprocess'.green} and ${'childprocess'.green}. ${'Default:'.bold} ${defaults.isolation.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  supervisorHost: {
    description: `The host of the Supervisor. ${'Default:'.bold} ${defaults.supervisorHost.toString().green}`,
    requiresArg: true,
    type: 'string'
  },
  supervisorPort: {
    description: `The port of the Supervisor. ${'Default:'.bold} ${defaults.supervisorPort.toString().green}`,
    requiresArg: true,
    type: 'number'
  },
  useMocks: {
    description: `When ${'true'.bold}, ${'mocks.js'.green} will be loaded at startup. ${'Default:'.bold} ${defaults.useMocks.toString().green}`,
    requiresArg: false,
    type: 'boolean'
  }
};
