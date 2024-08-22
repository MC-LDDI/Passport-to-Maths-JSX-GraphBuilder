document.addEventListener("DOMContentLoaded", function() {

    //index page tab function
    const tabs = document.querySelectorAll('.tab');
    const panes = document.querySelectorAll('.tab-pane');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        panes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });
    
    // Initialise the JSX board
    JXG.Options.text.useMathJax = true;

    var board = JXG.JSXGraph.initBoard('jxgbox', { 
        boundingbox: [-5, 5, 5, -5], 
        axis: true,
        showCopyright: false,
        defaultAxes: {
            x: {
                strokeWidth: 3,
                ticksDistance: 1,
                strokeColor: '#000000'
            },
            y: {
                strokeWidth: 3,
                ticksDistance: 1,
                strokeColor: '#000000'
            }
        }
    });

    // Label the x and y axes on the board
    board.create('text', [4.8, -0.3, "x"], {
        fontSize: 15,
        fixed: false,
        cssClass: 'OutPutText'
    });
    board.create('text', [-0.3, 4.8, "y"], {
        fontSize: 15,
        fixed: false,
        cssClass: 'OutPutText'
    });

    //Function 1: f(x) equation
    var f1;
    var legend1 = null;
    function addFirstLine() {
        var equationString = document.getElementById('equation').value;
        var lowerBound1 = parseFloat(document.getElementById('lowerBound1').value);
        var upperBound1 = parseFloat(document.getElementById('upperBound1').value);
        var f1Color = document.getElementById("colorForf1").value;
        if (equationString === '') {
            alert('Please enter a valid equation for the second line.');
            return;
        }
        if (isNaN(lowerBound1) || isNaN(upperBound1)) {
            alert('Please enter valid lower and upper bounds for the first line.');
            return;
        }
        if (f1) {
            board.removeObject(f1);
        }
        var newFunc = new Function('x', 'return ' + equationString);
        f1 = board.create('functiongraph', [newFunc, lowerBound1, upperBound1], { strokeWidth: currentStrokeWidth, strokeColor: f1Color });
        board.update();
    }

    function removeFirstLine() {
        if (f1) {
            board.removeObject(f1);
            f1 = null;
        }
    }

    var f2;
    var legend2 = null;
    function addSecondLine() {
        var equationString2 = document.getElementById('equation2').value;
        var lowerBound2 = parseFloat(document.getElementById('lowerBound2').value);
        var upperBound2 = parseFloat(document.getElementById('upperBound2').value);
        var f2Color = document.getElementById("colorForf2").value;
        if (equationString2 === '') {
            alert('Please enter a valid equation for the second line.');
            return;
        }
        if (isNaN(lowerBound2) || isNaN(upperBound2)) {
            alert('Please enter valid lower and upper bounds for the Second line.');
            return;
        }
        if (f2) {
            board.removeObject(f2);
        }
        var newFunc2 = new Function('x', 'return ' + equationString2);
        f2 = board.create('functiongraph', [newFunc2, lowerBound2, upperBound2], { strokeWidth: currentStrokeWidth, strokeColor: f2Color });
        board.update();
    }

    function removeSecondLine() {
        if (f2) {
            board.removeObject(f2);
            f2 = null;
        }
    }

    var f3;
    var legend3 = null;
    function addThirdLine() {
        var equationString3 = document.getElementById('equation3').value;
        var lowerBound3 = parseFloat(document.getElementById('lowerBound3').value);
        var upperBound3 = parseFloat(document.getElementById('upperBound3').value);
        var f3Color = document.getElementById("colorForf3").value;
        if (equationString3 === '') {
            alert('Please enter a valid equation for the third line.');
            return;
        }
        if (isNaN(lowerBound3) || isNaN(upperBound3)) {
            alert('Please enter valid lower and upper bounds for the third line.');
            return;
        }
        if (f3) {
            board.removeObject(f3);
        }
        var newFunc3 = new Function('x', 'return ' + equationString3);
        f3 = board.create('functiongraph', [newFunc3, lowerBound3, upperBound3], { strokeWidth: currentStrokeWidth, strokeColor: f3Color });
        board.update();
    }

    function removeThridLine() {
        if (f3) {
            board.removeObject(f3);
            f3 = null;
        }
    }

    var f4;
    function addFourthLine() {
        var equationString4 = document.getElementById('equation4').value;
        var lowerBound4 = parseFloat(document.getElementById('lowerBound4').value);
        var upperBound4 = parseFloat(document.getElementById('upperBound4').value);
        var f4Color = document.getElementById("colorForf4").value;

        if (equationString4 === '') {
            alert('Please enter a valid equation for the fourth line.');
            return;
        }
        if (isNaN(lowerBound4) || isNaN(upperBound4)) {
            alert('Please enter valid lower and upper bounds for the fourth line.');
            return;
        }

        if (f4) {
            board.removeObject(f4);
        }

        var newFunc4 = new Function('x', 'return ' + equationString4);
        f4 = board.create('functiongraph', [newFunc4, lowerBound4, upperBound4], { strokeWidth: currentStrokeWidth, strokeColor: f4Color });
        board.update();
    }

    function removeFourthLine() {
        if (f4) {
            board.removeObject(f4);
            f4 = null;
            board.update();
        }
    }

    var f5;
    function addFifthLine() {
        var equationString5 = document.getElementById('equation5').value;
        var lowerBound5 = parseFloat(document.getElementById('lowerBound5').value);
        var upperBound5 = parseFloat(document.getElementById('upperBound5').value);
        var f5Color = document.getElementById("colorForf5").value;

        if (equationString5 === '') {
            alert('Please enter a valid equation for the fifth line.');
            return;
        }
        if (isNaN(lowerBound5) || isNaN(upperBound5)) {
            alert('Please enter valid lower and upper bounds for the fifth line.');
            return;
        }

        if (f5) {
            board.removeObject(f5);
        }

        var newFunc5 = new Function('x', 'return ' + equationString5);
        f5 = board.create('functiongraph', [newFunc5, lowerBound5, upperBound5], { strokeWidth: currentStrokeWidth, strokeColor: f5Color });
        board.update();
    }

    function removeFifthLine() {
        if (f5) {
            board.removeObject(f5);
            f5 = null;
            board.update();
        }
    }

    var textLabels = [];

    function addTextLabel() {
        var labelText = document.getElementById('textLabels').value;
        if (labelText === '') {
            alert('Please enter some text for the label.');
            return;
        }

        var labelObj = board.create('text', [2, 2, labelText], { fontSize: 15, fixed: false, cssClass: 'OutPutText', isLaTeX: true });

        board.update();
        textLabels.push(labelObj);

        var labelList = document.getElementById("labelList");
        var button = document.createElement("button");
        button.innerHTML = "Remove";
        button.onclick = function() { removeTextLabel(labelObj, button); };

        var entry = document.createElement("div");
        entry.innerHTML = labelText + " ";
        entry.appendChild(button);
        labelList.appendChild(entry);
    }

    function removeTextLabel(labelObj, button) {
        board.removeObject(labelObj);
        var index = textLabels.indexOf(labelObj);
        if (index > -1) {
            textLabels.splice(index, 1);
        }
        button.parentElement.remove();
    }

    var verticalLines = [];
    var horizontalLines = [];

    function addVerticalLine() {
        var x_Verline = parseFloat(document.getElementById("x_Verline").value);
        var isDashed = document.getElementById("dashedLine").checked;
        var selectedColor = document.getElementById("lineColor").value;

        if (isNaN(x_Verline)) {
            alert("Please enter a valid x-value.");
            return;
        }

        var lineStyle = {
            strokeWidth: 2,
            strokeColor: selectedColor,
            straightFirst: false,
            straightLast: false
        };

        if (isDashed) {
            lineStyle.dash = 2;
        }

        var newVerticalLine = board.create('line', [[x_Verline, -50], [x_Verline, 50]], lineStyle);
        verticalLines.push(newVerticalLine);
        board.update();
    }

    function addHorizontalLine() {
        var y_Horline = parseFloat(document.getElementById("y_Horline").value);
        var isDashed = document.getElementById("dashedLineHorizontal").checked;
        var selectedColor = document.getElementById("lineColorHorizontal").value;

        if (isNaN(y_Horline)) {
            alert("Please enter a valid y-value.");
            return;
        }

        var lineStyle = {
            strokeWidth: 2,
            strokeColor: selectedColor,
            straightFirst: false,
            straightLast: false
        };

        if (isDashed) {
            lineStyle.dash = 2;
        }

        var newHorizontalLine = board.create('line', [[-50, y_Horline], [50, y_Horline]], lineStyle);
        horizontalLines.push(newHorizontalLine);
        board.update();
    }

    function removeVerticalLine() {
        var lastVerticalLine = verticalLines.pop();
        if (lastVerticalLine) {
            board.removeObject(lastVerticalLine);
        }
    }

    function removeHorizontalLine() {
        var lastHorizontalLine = horizontalLines.pop();
        if (lastHorizontalLine) {
            board.removeObject(lastHorizontalLine);
        }
    }

    var circle;

    function generateCircle() {
        if (circle) {
            board.removeObject(circle);
        }

        var k = parseFloat(document.getElementById("circle-k").value);
        var h = parseFloat(document.getElementById("circle-h").value);
        var r = parseFloat(document.getElementById("circle-r").value);
        var CircleColor = document.getElementById("colorForCircle").value;

        circle = board.create('circle', [[k, h], r], { strokeWidth: currentStrokeWidth, strokeColor: CircleColor });
    }

    function removeCircle() {
        if (circle) {
            board.removeObject(circle);
            circle = null;
        }
    }

    let ellipse_curve;

    function updateEllipse() {
        const a = parseFloat(document.getElementById('ellipse-a').value);
        const b = parseFloat(document.getElementById('ellipse-b').value);
        const h = parseFloat(document.getElementById('ellipse-h').value);
        const k = parseFloat(document.getElementById('ellipse-k').value);
        var EllipseColor = document.getElementById("colorForEllipse").value;

        if (ellipse_curve) {
            board.removeObject(ellipse_curve);
        }

        ellipse_curve = board.create('curve', [
            function(t) { return h + a * Math.cos(t); },
            function(t) { return k + b * Math.sin(t); },
            0, 2 * Math.PI
        ], { strokeWidth: currentStrokeWidth, strokeColor: EllipseColor });

        board.update();
    }

    function removeEllipse() {
        if (ellipse_curve) {
            board.removeObject(ellipse_curve);
            ellipse_curve = null;
            board.update();
        }
    }

    var curve1, curve2;

    function generateHyperbola() {
        var a = parseFloat(document.getElementById('hyperbola-a').value);
        var b = parseFloat(document.getElementById('hyperbola-b').value);
        var h = parseFloat(document.getElementById('hyperbola-h').value);
        var k = parseFloat(document.getElementById('hyperbola-k').value);
        var HyperbolaColor = document.getElementById("colorForHyperbola").value;
        var HyperbolaColor2 = document.getElementById("colorForHyperbola2").value;

        curve1 = board.create('curve', [
            function(t) { return h + a * Math.sqrt(t * t / (b * b) + 1); },
            function(t) { return k + t; },
            -50, 50
        ], { strokeWidth: currentStrokeWidth, strokeColor: HyperbolaColor });

        curve2 = board.create('curve', [
            function(t) { return h - a * Math.sqrt(t * t / (b * b) + 1); },
            function(t) { return k + t; },
            -50, 50
        ], { strokeWidth: currentStrokeWidth, strokeColor: HyperbolaColor2 });
    }

    function removeHyperbola() {
        if (curve1 && curve2) {
            board.removeObject(curve1);
            board.removeObject(curve2);
        }
    }

    var plot;

    function updatePiecewise() {
        var f1 = document.getElementById("piecewise-function1").value;
        var f2 = document.getElementById("piecewise-function2").value;
        var f3 = document.getElementById("piecewise-function3").value;
        var xLimit1 = parseFloat(document.getElementById("piecewise-xLimit1").value);
        var xLimit2 = parseFloat(document.getElementById("piecewise-xLimit2").value);
        var PiecewiseColor = document.getElementById("colorForPiecewise").value;

        if (plot) {
            board.removeObject(plot);
        }

        var piecewiseFunction = function(x) {
            if (x < xLimit1) {
                return eval(f1);
            } else if (x < xLimit2) {
                return eval(f2);
            } else {
                return eval(f3);
            }
        };

        plot = board.create('functiongraph', [piecewiseFunction, -50, 50], { strokeWidth: currentStrokeWidth, strokeColor: PiecewiseColor });
    }

    function removePiecewise() {
        if (plot) {
            board.removeObject(plot);
            plot = null;
        }
    }

    var points = [];

    function addPoint() {
        var x = parseFloat(document.getElementById("pointX").value);
        var y = parseFloat(document.getElementById("pointY").value);
        var pointType = document.getElementById("pointType").value;

        if (isNaN(x) || isNaN(y)) {
            alert("Please enter valid x and y coordinates.");
            return;
        }

        var filledPointAttributes = {
            name: ' ',
            fillColor: 'red',
            strokeColor: 'red',
            strokeWidth: 5,
            fixed: false
        };

        var outlinePointAttributes = {
            name: ' ',
            fillColor: '#FFF',
            strokeColor: 'red',
            strokeWidth: 3.5,
            fixed: false
        };

        var attributes = (pointType === "filled") ? filledPointAttributes : outlinePointAttributes;

        var newPoint = board.create('point', [x, y], attributes);
        points.push(newPoint);
        board.update();
    }

    function removeLastPoint() {
        var lastPoint = points.pop();
        if (lastPoint) {
            board.removeObject(lastPoint);
        }
    }

    function changeLineColor(selectElementId, jsxGraphElement) {
        var selectElement = document.getElementById(selectElementId);
        var selectedColor = selectElement.options[selectElement.selectedIndex].value;
    
        if (jsxGraphElement) {
            jsxGraphElement.setAttribute({ strokeColor: selectedColor });  // Correct way to set the stroke color
            board.update();
        }
    }
    

    function resizeBoard() {
        var newWidth = document.getElementById('width').value;
        var newHeight = document.getElementById('height').value;

        var container = document.getElementById('jxgbox');
        container.style.width = newWidth + 'px';
        container.style.height = newHeight + 'px';

        board.resizeContainer(newWidth, newHeight);
    }

    var currentStrokeWidth = 6;

    function updateStrokeWidth() {
        currentStrokeWidth = document.getElementById('strokeWidth').value;

        if (f1) {
            f1.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (f2) {
            f2.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (f3) {
            f3.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (circle) {
            circle.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (ellipse_curve) {
            ellipse_curve.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (curve1 && curve2) {
            curve1.setAttribute({ strokeWidth: currentStrokeWidth });
            curve2.setAttribute({ strokeWidth: currentStrokeWidth });
        }
        if (plot) {
            plot.setAttribute({ strokeWidth: currentStrokeWidth });
        }

        board.update();
    }

    function exportBoard() {
        var filename = prompt("Rename your image file", "");
        if (filename === null || filename === "") return;

        var svgElement = document.querySelector('#' + board.containerObj.id + ' svg');
        var clonedSvgElement = svgElement.cloneNode(true);

        var textElements = document.querySelectorAll('#' + board.containerObj.id + ' .OutPutText');
        textElements.forEach(function(textElement) {
            var position = textElement.getBoundingClientRect();
            var svgPosition = svgElement.getBoundingClientRect();

            var textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
            textNode.setAttribute('x', position.left - svgPosition.left);
            textNode.setAttribute('y', position.top - svgPosition.top + parseInt(window.getComputedStyle(textElement).fontSize, 10));

            textNode.setAttribute('font-size', '16px');
            textNode.setAttribute('font-family', 'Arial');
            textNode.setAttribute('font-weight', 'bold');
            textNode.textContent = textElement.textContent;

            clonedSvgElement.appendChild(textNode);
        });

        var xml = new XMLSerializer().serializeToString(clonedSvgElement);
        var image = new Image();
        image.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(xml)));

        image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);

            var imgData = canvas.toDataURL('image/png');
            var link = document.createElement('a');
            link.href = imgData;
            link.download = filename + '.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }

    window.addFirstLine = addFirstLine;
    window.removeFirstLine = removeFirstLine;
    window.addSecondLine = addSecondLine;
    window.removeSecondLine = removeSecondLine;
    window.addThirdLine = addThirdLine;
    window.removeThridLine = removeThridLine;
    window.addFourthLine = addFourthLine;
    window.removeFourthLine = removeFourthLine;
    window.addFifthLine = addFifthLine;
    window.removeFifthLine = removeFifthLine;
    window.addTextLabel = addTextLabel;
    window.removeTextLabel = removeTextLabel;
    window.addVerticalLine = addVerticalLine;
    window.removeVerticalLine = removeVerticalLine;
    window.addHorizontalLine = addHorizontalLine;
    window.removeHorizontalLine = removeHorizontalLine;
    window.generateCircle = generateCircle;
    window.removeCircle = removeCircle;
    window.updateEllipse = updateEllipse;
    window.removeEllipse = removeEllipse;
    window.generateHyperbola = generateHyperbola;
    window.removeHyperbola = removeHyperbola;
    window.updatePiecewise = updatePiecewise;
    window.removePiecewise = removePiecewise;
    window.addPoint = addPoint;
    window.removeLastPoint = removeLastPoint;
    window.changeLineColor = changeLineColor;
    window.resizeBoard = resizeBoard;
    window.updateStrokeWidth = updateStrokeWidth;
    window.exportBoard = exportBoard;
});
