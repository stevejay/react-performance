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
  animationLibrary: AnimationLibrary;
  animationDuration: AnimationDuration;
  shouldDelayNavigation: boolean;
  pageWeight: PageWeight;
}

const AnimationStore = new Store<AnimationStore>({
  animationLibrary: AnimationLibrary.ReactTransitionGroup,
  animationDuration: AnimationDuration.Fast,
  shouldDelayNavigation: true,
  pageWeight: PageWeight.Heavy
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
