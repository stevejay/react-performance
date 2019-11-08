import { Store } from "pullstate";

enum AnimationLibrary {
  ReactSpring = "ReactSpring",
  ReactTransitionGroup = "ReactTransitionGroup"
}

enum PageWeight {
  Light = "Light",
  Heavy = "Heavy"
}

enum AnimationDuration {
  Fast = "Fast",
  Slow = "Slow"
}

interface AnimationStore {
  animationDuration: AnimationDuration;
  animationLibrary: AnimationLibrary;
  pageWeight: PageWeight;
  shouldDelayNavigation: boolean;
}

const AnimationStore = new Store<AnimationStore>({
  animationDuration: AnimationDuration.Fast,
  animationLibrary: AnimationLibrary.ReactTransitionGroup,
  pageWeight: PageWeight.Heavy,
  shouldDelayNavigation: true
});

const selectAnimationDurationMs = (store: AnimationStore) =>
  store.animationDuration === AnimationDuration.Fast ? 250 : 1500;

export {
  AnimationDuration,
  AnimationLibrary,
  AnimationStore,
  PageWeight,
  selectAnimationDurationMs
};
