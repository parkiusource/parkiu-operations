import {
  Steps as OnboardingSteps,
  useOnboardingContext,
} from '@/contexts/OnboardingContext';
import { User } from '@/models/User';
import { useEffect } from 'react';

interface UseOnboardingProps {
  user: User | undefined;
}

export const useOnboarding = ({ user }: UseOnboardingProps) => {
  const { state, dispatch } = useOnboardingContext();

  const { step } = state;

  useEffect(() => {
    if (!user) return;

    if (user.profile.status === 'pending_profile') {
      dispatch({ type: 'SET_STEP', payload: OnboardingSteps.Profile });
    }
  }, [user]);

  return { step };
};
