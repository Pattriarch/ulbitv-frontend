import { fetchArticleById } from "./fetchArticleById";

import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

const data = {
  id: 1,
  title: "title",
  subtitle: "subtitle",
  img: "path",
  views: 1000,
  createdAt: "2020-02-02",
  type: [],
  blocks: [],
};

describe("fetchArticleById", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(data);
  });

  test("error fetch", async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
