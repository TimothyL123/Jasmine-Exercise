describe("Payments test(with setup and tear-down)", function () {
    beforeEach (function () {
        billAmInput.value = 100;
        tipAmInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        sumbitPaymentInfo ();
        
        expect(Object.keys(allPayments.length).toEqual(1));
        expect(allPayments['payment1'].billAmInput).toEqual('100');
        expect(allPayments['payment1'].billAmInput).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        sumbitPaymentInfo();

        expect(Object.keys(allPayments).length.toEqual(0));
    });
    
    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.legnth).toEqual(4);
        expect(curTdList[1].innerText).toEqual('$100');
        expect(curTdList[2].innerText).toEqual('$20');
        expect(curTdList[3].innerText).toEqual('$20');
        expect(curTdList[4].innerText).toEqual('X');
    });

    it('should create a new payment on createCurPayment()', function () {
        billAmInput.value = '';
        tipAmInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function () {
        billAmInput.value = '';
        paymentTbody = '';
        summaryTds = '';
        summaryTds = '';
        summaryTds = '';
        serverTbody = '';
        allPayments = {};
        paymentId = 0;
    });
});
