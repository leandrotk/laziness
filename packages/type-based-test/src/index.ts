import ts from 'typescript';

const start = async () => {
  const filename = 'examples/sum.ts';
  const program = ts.createProgram([filename], {});
  const sourceFile = program.getSourceFile(filename) as ts.SourceFile;

  function printRecursiveFrom(
    node: ts.Node,
    indentLevel: number,
    sourceFile: ts.SourceFile
  ) {
    const indentation = '-'.repeat(indentLevel);
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);
    console.log(`${indentation}${syntaxKind}: ${nodeText}`);

    node.forEachChild((child) =>
      printRecursiveFrom(child, indentLevel + 1, sourceFile)
    );
  }

  printRecursiveFrom(sourceFile, 0, sourceFile);
};

start();
