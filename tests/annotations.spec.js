import {test} from '@playwright/test'

// test("Test1", async()=>{
//     console.log("test1");
// })

// test("Test2", async()=>{
//     console.log("test2");
// })

// test.only("Test3", async()=>{
//     console.log("test3");
// })

// test("Test4", async()=>{
//     console.log("test4");
// })

// test("Test5", async()=>{
//     console.log("test5");
// })

test.describe.only('login', async()=>{
    console.log("Outer test 1")
    test('password button 1', async({page}) => {
        console.log("Inner test 1");
    })
    test.only('password button 2', async({page}) => {
        console.log("Inner test 2");
    })
})

// test.fail('Failed test case', async({page}) => {
//     await page.goto("https://www.amazon.in/")
// })