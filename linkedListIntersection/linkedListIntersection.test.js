const { linkedListIntersection, Node } = require('./linkedListIntersection.js');

describe('linkedListIntersection', () => {
  function createLinkedList(values) {
    let head = null;
    let tail = null;

    for (let i = 0; i < values.length; i++) {
      const newNode = new Node(values[i]);

      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }

    return head;
  }

  it('returns the intersection node when there is an intersection', () => {
    const nodeD = new Node('D');
    const nodeE = new Node('E');
    const nodeF = new Node('F');

    const list1 = new Node('A');
    list1.next = new Node('B');
    list1.next.next = new Node('C');
    list1.next.next.next = nodeD;

    nodeD.next = nodeE;
    nodeE.next = nodeF;

    const list2 = new Node('X');
    list2.next = new Node('Y');
    list2.next.next = nodeD;

    const intersectionNode = linkedListIntersection(list1, list2);

    expect(intersectionNode).toBe(nodeD);
  });

  it('returns null when there is no intersection', () => {
    const list1 = createLinkedList(['A', 'B', 'C', 'D']);
    const list2 = createLinkedList(['X', 'Y', 'Z']);

    const intersectionNode = linkedListIntersection(list1, list2);

    expect(intersectionNode).toBeNull();
  });

  it('returns null when one or both lists are empty', () => {
    const emptyList = null;

    const list = createLinkedList(['A', 'B', 'C']);

    expect(linkedListIntersection(null, null)).toBeNull();
    expect(linkedListIntersection(emptyList, null)).toBeNull();
    expect(linkedListIntersection(null, emptyList)).toBeNull();

    expect(linkedListIntersection(emptyList, list)).toBeNull();
    expect(linkedListIntersection(list, emptyList)).toBeNull();
  });
});
