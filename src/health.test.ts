import { describe, it, expect } from 'vitest';
import { healthStatus } from './health';

describe('healthStatus', () => {
  it('should return healthy status', () => {
    expect(healthStatus()).toEqual({ status: 'healthy' });
  });
});
