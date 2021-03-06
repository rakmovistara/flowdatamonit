/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

interface Numeral {
  (value?: unknown): Numeral;
  format: (pattern: string) => string;
  unformat: (pattern: string) => number;
}

declare var numeral: Numeral;

declare module '@elastic/numeral' {
  export = numeral;
}
