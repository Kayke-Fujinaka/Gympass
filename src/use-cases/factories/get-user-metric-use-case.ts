import { PrismaCheckInsrepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetUserMetricsUseCase } from '../get-user-metric'

export function makeGetUserMetricUseCase() {
  const checkInsRepository = new PrismaCheckInsrepository()
  const useCase = new GetUserMetricsUseCase(checkInsRepository)

  return useCase
}
