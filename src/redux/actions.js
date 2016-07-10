export const TEST_ACTION = "TEST ACTION";

export function testAction(text){
  return {
    type:TEST_ACTION,
    text:text
  }
}
