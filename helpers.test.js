describe("Utilities test (with setup and tear-down)", function () {
    beforeEach (function () {
        billAmInput.value = 100;
        tipAmInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments of all payments on sumPaymentTotal ()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmInput.value = 200;
        tipAmInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });

    it('should sum total tip amount of all payments of all payments on sumPaymentTotal ()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmInput.value = 200;
        tipAmInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(300);
    });
    
    it('should sum total tip amount of all payments of all payments on sumPaymentTotal ()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmInput.value = 100;
        tipAmInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(40);
    });

    it('should sum total tip amount of all payments of all payments on sumPaymentTotal ()', function() {
        expect(caluclateTipPercent(100, 23)).toEqual(23);
        expect(caluclateTipPercent(111, 11)).toEqual(10);
    });

    it('should generate new td from value and append to tr on append to tr appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
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

