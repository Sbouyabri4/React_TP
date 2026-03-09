// Type definition for Event interface
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

// Navigation parameter list for all screens
export type RootStackParamList = {
  // Home screen(list of events) - no parameters needed
  '(tabs)': undefined;
  
  // Event detail screen - requires an event object
  'event-detail': { 
    event: Event;
  };
};
