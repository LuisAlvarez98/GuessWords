import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe("moxios tests", () => {
  beforeAll(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("calls the getSecretWord callback on axios response", async () => {
    const secretWord = "party";

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    // create mock for callback arg
    const mockSetSecretWord = jest.fn();

    await getSecretWord(mockSetSecretWord);
    //se whether mock was run with the correct arg.
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
