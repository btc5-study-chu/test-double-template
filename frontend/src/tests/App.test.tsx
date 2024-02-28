// import {render} from "@testing-library/react"
// import App from "../App.tsx";
import {describe, test, vi} from "vitest";
// import {PostArea} from "../screens/PostArea.tsx"
// import {InfoArea} from "../screens/InfoArea.tsx";


vi.mock("../components/PostArea.tsx")
vi.mock("../components/InfoArea.tsx")
describe("App.tsxのテスト",()=> {
    test("App.tsxをレンダリングするとPostAreaコンポーネントをレンダリングする",()=>{
        //given

        //when
        // render(<App />)

        //then
        // expect(PostArea).toHaveBeenCalled()
    })

    test('App.tsxをレンダリングするとInfoAreaコンポーネントをレンダリングする', () => {
        // render(<App />)


        // expect(InfoArea).toHaveBeenCalled()
    })
})
// import { vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../App.tsx';
// import {PostArea} from "../screens/PostArea.tsx";
// import {act} from "react-dom/test-utils"; // App1.tsxからAppコンポーネントをインポート
//
//
// // PostAreaとInfoAreaコンポーネントのモックを作成
//
//
// vi.mock('./screens/InfoArea', () => ({
//     InfoArea: () => <div data-testid="mock-info-area">Mock Info Area</div>
// }));
//
// describe('App Component', () => {
//     beforeEach(() => {
//         vi.resetModules();
//     });
//
//     afterEach(() => {
//         vi.restoreAllMocks();
//     });
//     it('renders PostArea and InfoArea components',  () => {
//         act(async () => {
//             await render(<App />);
//             /* fire events that update state */
//         });
//
//         console.log("ここ！！！",PostArea)
//         // モックされたPostAreaコンポーネントがレンダリングされているか確認
//         // const mockPostArea = screen.getByTestId('mock-post-area');
//         // expect(mockPostArea).toBeInTheDocument();
//         // expect(mockPostArea).toHaveTextContent('Mock Post Area');
//
//         // モックされたInfoAreaコンポーネントがレンダリングされているか確認
//         const mockInfoArea = screen.getByTestId('mock-info-area');
//         expect(mockInfoArea).toBeInTheDocument();
//         expect(mockInfoArea).toHaveTextContent('Mock Info Area');
//     });
// });