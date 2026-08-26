export interface HealthStatus {
  status: 'healthy';
}

export function healthStatus(): HealthStatus {
  return { status: 'healthy' };
}
