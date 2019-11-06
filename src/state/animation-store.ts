import { Store } from "pullstate";

enum AnimationLibrary {
  ReactSpring,
  ReactTransitionGroup
}

enum PageWeight {
  Light,
  Heavy
}

interface AnimationStore {
  animationLibrary: AnimationLibrary;
  animationDurationMs: number;
  shouldDelayNavigation: boolean;
  pageWeight: PageWeight;
}

const AnimationStore = new Store<AnimationStore>({
  animationLibrary: AnimationLibrary.ReactTransitionGroup,
  animationDurationMs: 250,
  shouldDelayNavigation: true,
  pageWeight: PageWeight.Heavy
});

export { AnimationStore, AnimationLibrary, PageWeight };
