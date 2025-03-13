# Sharing an Angular service with components in a parent-child relationship

## Context
- GUID Service has public `guid` property initialized via its constructor
- Parent component: `AppComponent`
- Child components: `Child1Component`, `Child2Component`
- Test: Components log the `guid` property of their respective `GuidService`'s `guid` property

## Scenario 1: Service (not `providedIn: root`) injected into parent component via its `providers` array
**Hypothesis: service instance will be shared between parent and children components when it's only in the parent component's `providers` array**  
Result: true

## Scenario 2: Service (`providedIn: root`) injected into parent component via its `providers` array
**Hypothesis: no change from previous**  
Result: true

## Scenario 3: Service (`providedIn: root`) NOT injected into parent component via its `providers` array
**Hypothesis: no change from previous**  
Result: true

## Scenario 4: One or both child components has service included in `providers` array
**Hypothesis: service instance will be shared between parent and child component without service included in `providers` array, but not with the child component with service included in `providers` array**
Result: true

## Lessons Learned / Notes
- Service instance is shared between parent and child components as long as the child doesn't have the service included in its `providers` array
- Need to have service registered somehow / some way otherwise injection won't work (pretty obvious but worth noting for completeness)
    - Exception to this is if service property is set as `static`, in which case the service doesn't need to be injected or included as a provider
