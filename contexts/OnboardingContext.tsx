import React, { createContext, useReducer, useMemo, useContext } from 'react';

export enum Steps {
  Profile = 'profile',
}

interface OnboardingState {
  step: Steps;
}

type OnboardingAction = { type: 'SET_STEP'; payload: Steps };

const onboardingReducer = (
  state: OnboardingState,
  action: OnboardingAction,
): OnboardingState => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

export interface OnboardingContextProps {
  state: OnboardingState;
  dispatch: React.Dispatch<OnboardingAction>;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(
  undefined,
);

type OnboardingProviderProps = {
  children: React.ReactNode;
};

export const OnboardingProvider = ({ children }: OnboardingProviderProps) => {
  const initialState: OnboardingState = {
    step: Steps.Profile,
  };

  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      'useOnboardingContext must be used within an OnboardingProvider',
    );
  }

  return context;
};
