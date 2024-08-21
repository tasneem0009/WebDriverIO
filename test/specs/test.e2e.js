// it("HR_TC001", async () => {

//     await browser.url('https://opensource-demo.orangehrmlive.com/')
//     await $('[name="username"]').setValue('Admin')
//     await $('[name="password"]').setValue('admin123')
//     await $('.orangehrm-login-button').click()
//     var logo = await $('img[src*="logo"]')
//     await expect(logo).toHaveAttribute('alt', 'client brand banner')
//    // await expect(logo).toHaveElementProperty('width', 182)
    
// })


// it("HR_TC002", async () => {
//     await browser.url('https://opensource-demo.orangehrmlive.com/')
//     await $('[name="username"]').setValue('Admin')
//     await $('[name="password"]').setValue('admin123')
//     await $('.orangehrm-login-button').click()
//     var logo = await $('img[src*="logo"]')
//     await expect(logo).toHaveElementProperty('width', 182)

// })


it("HR_TC003", async () => {
    await browser.url('https://opensource-demo.orangehrmlive.com/')
    await $('[name="username"]').setValue('Admin')
    await $('[name="password"]').setValue('admin123')
    await $('.orangehrm-login-button').click()
    await $('[title="Assign Leave"]').moveTo()
    await $('[title="Assign Leave"]').click()
    await $('.oxd-autocomplete-wrapper').click()
    await browser.keys("John Smith")
    await $('.oxd-select-wrapper').click()
    if (await $('.oxd-select-wrapper').isExisting()) {
        await browser.keys("\uE015")
        await browser.keys("\uE015")
        await browser.keys("\uE015")
        await browser.keys("\uE015")
        await browser.keys("\uE007") //Enter
        await browser.pause(3000)
        var leavetype = await $('.oxd-select-wrapper')
        await expect(leavetype).toHaveTextContaining('CAN')
    }
})



