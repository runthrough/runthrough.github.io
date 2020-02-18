---
layout: post
title: Database Systems Concepts and Design
---

### L01 - Course Overview

#### [C01 - Database Application Development Methodology](https://classroom.udacity.com/courses/ud150/lessons/6078480432/concepts/92365083040923)
1. Analysis
	1. Case Study
2. Specification
   1. Extended Entity Relationship Model
3. Design
   1. Mapping EER -> Relations
   2. Relational Query Language
      1. Algebra
      2. Calculus
      3. SQL
4. Implementation
   1. Normalization
   2. User Interface
   3. Efficiency / Indexing

### L02 - Fundamentals of Databses

#### [C02 - Overview](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/58944640630923)
1. What is a Database?
   1. Model of Reality


#### [C03 - Why use models?](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/58435766480923)
1. Models can be useful when we want to examine or manage part of the real world.
2. The costs of using a model are often considerably lower than the costs of using or experimenting with the real world itself.


#### [C06 - A message to model makers](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/58435766510923)
1. A model is a means of communication
2. Users of a model must have a certain amount of knowledge in common
3. A model
   1. Only emphasizes selected aspects
   2. is described in some language
   3. can be erroneous
   4. may have features that don't exist in reality

#### [C09 - To use](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59861122960923)

#### [C10 - Not to use](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59861122970923)

#### [C12 - Data Modelling](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59861122990923)
1. A model represents a perception of structures of reality.
2. The data modeling process is to fix the perception of structures of reality and represent this perception.
   1. Extended Entity Relationship Model to fix the perception of structures of reality.
   2. A relational model is used to represent it inside the database.
3. In the data modeling process we select aspects of reality which is important and we use abstraction to organize these abstraction.

#### [C13 - Process Modelling](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269540923)
1. In process modelling, we aim at fixing and representing a perception of processes of reality.
2. Process modelling is not reflected in the database rather they are reflected in the way we use the database through DBMS.
3. Data manipulation language is used to either embed it inside the program or issue ad-hoc queries to the database. DML we will learn is SQL.

#### [C14 - Data Models - Architecture DBMS Architecture](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269550923)
1. Data Models - Is a tool which contains formulations to allow us to express data structures, constraints and operations. We are going to study major data models, namely the extended entity relationship model and the relational model.
   1. Data Structures
   2. Constraints
   3. Operations
   4. Keys and Identifiers
   5. Integrity and Consistency
   6. Null Values
   7. Surrogates
2. Architecture - Is another important aspect. Databse or models of structure of reality has several layers to it. We will look into it and we will also look into the DBMS architecture which allows us to create such database.
   1. Database
      1. ANSI/SPARC 3-Level DB Architecture
      2. Data Independence
   2. Database Management System
3. Metadata

#### [C15 - Examples of Data Models](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269560923)
1. A data model is not the same as the model of data. We define the database to be a model of strucutres of reality and a data model is a tool to create such a model. We should be talking about three elements - data structures, integrity constraints and operations. Following are the 3 examples of data model.
   1. Entity Relationship Model. - Fix perception of reality.
   2. Relational Model. - will use in dbms
   3. Hierarichal Model. - XML databases

#### [C16 - Relational Models - Data Strucutres](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269570923)
1. Schema stable over time. It constitutes table name, column name and their data type. No of columns is degree of table. Schema represents the structure of the data that is modeled by the table.
2. State is dynamic and reflects the state of reality. It is represented by rows.

#### [C17 - Relational Model - Constraints](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269580923)
1. Constraints represent rules that can't be expressed by the data structures alonee. e.g. email's must be unique and non-null, birthdate must be after a give date etc.

#### [C18 - Data Model - Operations](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269590923)
1. Operations support change and retrieval of data.

#### [C19 - Keys and Identifiers](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269600923)
1. Keys are uniqueness identifiers.

#### [C21 - Integrity and Consistency](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269610923)
1. These two are highly desirable propertie of databases.
2. Integrity: does the database reflects the reality well? For eg. a male name should not have female as gender column.
3. Consistency: is the database without internal conflicts? for eg. address current city doens't match with the city column.

#### [C23 - Null Values](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269620923)
1. We need to think of which kind of null value is allowed for a column and which not. Or if the null values should be allowed at all or not.

#### [C24 - Surrogates - Things and Names](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269630923)
1. Everything is a thing, and somethings are just, that thing.
2. There are two types of representations:
   1. Name-based representation: You're what is known about you.
   2. Surrogates-based representation: Surrogates are system generated, unique, internal identifiers. In this case it easy to map the data with real world entity.

#### [C25 - ANSI-SPARC](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269640923)
1. If the database only consists of schema and data then schema should contain the aspects of meaning of the data, how it is used and how it is internally organised. This would mean the queries against that scheme will be able to reference how the data is internally organised. This means if we decide to change how the data is internally organised then the application would be affected.
2. This architecture seperates out how the data is internally organised through internal schema. And data now sits on internal schema. Database is also used by many different applications with different needs to display data. Therefore differents needs are fulfilled by external schema level which seperates out aspects of how data is used by individual applications.
3. So each schema concentrates on:
   1. External schema -> use of data
   2. Conceptual schema -> meaning of data
   3. Internal Schema -> storage of data

#### [C26 - Conceptual Schema](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269650923)
1. Describes all conceptually relevant, general time invariant structural aspect of reality.
2. Excludes aspects of data representation and physical organization and access or use.
3. For example, the only the query language are able to see is the table and the columns in it. The applications can only 'see' the structures. It can't tell how the data is accessed.

#### [C27 - External Schema](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269660923)
1. Describes parts of the information in the conceptual schema in a form convenient to a particular user group's view.
2. Is derived from conceptual schema.

#### [C29 - Internal Schema](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269670923)
1. Describes how the information describes in the conceptual schema is physically represented to provide the overall best performance.
2. In case you query a table a lot based on some value of a column it would be good if we create a index on that column. For example, creating B+ index on that column would increase the efficiency of the query and will also change how the data is organised internally meaning chaning the internal schema.

#### [C30 - Physical Data Independence](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269680923)
1. With 3 level ANSI-SPARC architecture we get two types of independence on data.
   1. Physical Data Independence - is a measure of how much the internal schema can change without affecting the application program. It is similar to encapsulation where the implementation of the class can be changed without affecting the application which access the classes methods.
   2. Logical Data Independence

#### [C31 - Logical Data Independence](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269690923)
1. Logical Data Independence is a measure of how much conceptual schema can be changed without affecting the application.
2. Since external schema is lgoically derived from the conceptual schema it is more difficult to implement this independence.

#### [C33 - ANSI-SPARC DBMS Framework, Part 01](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269700923)
1. This framework was proposed by American National Standards Institute in 1975. Using the architecture we can create a 3 level database we discussed.
2. It has two parts:
   1. Schema compile piece
   2. Query Transformer piece

#### [C32 - ANSI-SPARC DBMS Framework, Part 02](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269710923)

#### [C33 - Metadata](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269720923)

#### [C34 - Metadata - What is it?](https://classroom.udacity.com/courses/ud150/lessons/5828989677/concepts/59769269730923)
1. There are two kinds of metadata:
   1. System Metadata
      1. Where data came from
      2. How data are changed
      3. How data are stored
      4. How data are mapped
      5. Who owns data
      6. Who can access data
      7. Data usage history
      8. Data usage statistics
   2. Business Metadata
      1. What data are available
      2. Where data are located
      3. What the data mean
      4. How to access the data
      5. Predefined reports
      6. Predefined queries
      7. How current the data are
2. Importance of Metadata
   1. System metadata are critical in a DBMS
   2. Business metadata are critical in a data warehouse

### L03 - Methodology I : Analysis

#### [C01 - Database Application Development Methodology-Assumptions](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/60921987090923)
1. Can only be used to design the applcation which use database and it will not work in normal software development projects.

#### [C02 - The Software Process](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/60929385500923)
1. The waterfall software development process is also followed in the database application development process. However, 2-5 are unique (different) in this case and we will study that.
   1. Business process (re-) design
   2. Analysis
   3. Specification
   4. Design
   5. Implementation
   6. Testing
   7. Operation
   8. Maintenance

#### [C03 - Overview of Methodology Data First](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/60902787720923)
1. In database application development data is first whereas in general software application development process is put first.
2. Following are the end result of each step in database application development methodology.
   1. Analysis -> Information Flow Diagram
   2. Sepecification -> Tasks -> ER or EER Diagram
   3. Design -> Relational Schema (from ER Diagram) -> Abstract Code (w/SQL)
   4. Implementation -> MySQL Relational Platform -> PHP Code (w/SQL)

#### [C08 - Analysis - Information Flow Diagram](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/63714212600923)
1. Ellipses - Tasks
2. Document (rectangle) - Input/Output screens
3. Arrow - Information Flow (not Control Flow remember)
4. Broken Line - system boundary
5. There are few rules to be followed
   1. Information flow; not control flow
   2. Never connect two documents
   3. Never connect two tasks

#### [C14 - IFD chart](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/63991086130923)
1. Here is the information flow diagram from the requirements present in the C9-C13
2. It is the first high level specification of the system. You will also find that the tasks can be further refined more and more but you should not do that and take this a top level specification of system described by the customer.

#### [C15 - Don't Go There](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/63991086140923)
1. Never assume the documents and tasks. Always ask customer for the requirements.

#### [C16 - Specfication V2](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/65805289750923)
1. From IFD we will used input/output documents to design EER Diagram.
2. We will use tasks and decide what will each of them are going to do based on the database we have designed.
3. The following will be the output of this step:
   1. EER Diagram
   2. Data Formats
   3. Constraints
   4. Task Decomposition

#### [C17 - What goes in out of the Database](https://classroom.udacity.com/courses/ud150/lessons/6055728550/concepts/63991086160923)
1. Database design is an art but by making following mechanical steps we can take out some art:
   1. What goes into the database?
      1. Everything in database must come from somewhere. It doesn't happen by magic.
      2. Everything on the input documents must go somewhere.
   2. What comes out of the database?
      1. Everything in the database must be used for something.
      2. Everything on the output documents must come from somewhere.

### L04 - Extended Entity Relationship Model

#### [C01 - (headshot) Introduction](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/64078485410923)
1. In order to data modelling we need data models. One of the data models we talked about extended entity relationship model is good at fixing and representing the perception of reality.

#### [C02 - Entity Type and Entity Surrogates](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58394585450923)
1. It is represented by rectangle.
2. In one EER diagram all entity type name must be unique.

#### [C03 - Single Value Properties](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58394585460923)
1. Single valued property is represented by single line ellipses.
2. Property values are:
   1. Lexical, visible, audible.
   2. They are things that name other things.

#### [C04 - Identifying Properties](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58394585470923)
1. It is represented by underline on the name of property name with the ellipse.
2. Every entity must be uniquely referencable which means for each indentifying property value there is at most one instance of identified entity.

#### [C05 - Composite Properties](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58262291190923)
1. Composite property is made up of two properties and they are also represented by ellipses further connecting the properties from which it is made up of.

#### [C06 - Multi-valued Properties](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58262291200923)
1. Mutli-value property is represented by double ellipses. It can take multiple values like interest of a user etc.

#### [C08 - 1-1 relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58262291210923)
1. Relationship types are represented by diamond mentioning 1-1 on the connection which is a cardinality of the relationship.
2. The names of the multiple relationship types between the same two entity types must be unique.
3. If some of the relationships are not formed between the users of two entities meaning there exist some user who are not having the relationship and some are having with at most one (because 1:1 relationship type) then it is called partial function (called function because atmost one relationship exist). In the direction in which the at most one user is connected is the direction of parital function.

#### [C09 - 1-many relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58262291220923)
1. 1-N relationship types are again represented by diamond and mentioning 1-N on the connection.
2. The surrogates in the left entity is connected to many entities in the right.

#### [C10 - Mandatory 1-N relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58315190580923)
1. Madatory 1-N relationship types are represented by bold solid line on the side of the entity which mandatorily has to take part in the relationship.
2. In the case of employer and regular user, each regular user must be the employed by any of the employer but the opposite is not true.
3. Since all the regular user are employed by some employer it is not only a partial function but a total function.

#### [C11 - N-M Relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58315190590923)
1. Example - Schools attended by regular users. Represented by N-M on the connection line.
2. This is not a function it's a relationship because the connection are not following the atmost one rule.

#### [C13 - N-ary relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58315190600923)
1. Relationship types can have properties.
2. Sometimes it is necessary to make n-ary relationship type to express the relationship instance precisely. But they are rare and difficult to understand.
3. It is not always possible to express the n-ary relationship in terms of binary relationships.

#### [C14 - Many relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58315190610923)
1. Many ternary relaitonship types cannot be reduced to a conjunction of binary relationship types.

#### [C15 - Identifying relationships / Weak entity types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58315190620923)
1. In the case of status update from user, timestamp alone is a parital identifier because there can be other user posting status updates on that time. Hence you'll need user email as well for identifying the status update uniquely. Hence the relationship shared by user and status update is an identifying relationship. And the status update is an weak entity type.
   1. Status Update cannot:
      1. Exist without regular user.
      2. be identified without regular user.
   2. (Email and date and time) identifies
      1. status update.
2. Identifying relationships - double diamond.
3. Partial identifiers - broken underline on property name.
4. Weak entity types - double rectangle.

#### [C17 - Rcursive relationship types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58325689610923)
1. It is recursive becaue it relates the entity type to itself. For example, adminstrator and the supervisor among them will be the supervisee of many.

#### [C18 - Supertypes and subtypes](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58325689620923)
1. It is also called is-a relationship types. For example, male user and female user is-a (must be) part of user, they can't be alone. Regular user and admin user is a part of user.
2. This relationship can be of following types:
   1. Disjoint constraint - represented by circeled d on the relationship line. Ex. user can only be of type female or male hence disjoint constraint.
   2. Overlap constraint - represented by circeled o. A user can be regular user and admin user both.

#### [C19 - Supertypes and subtypes-inheritance](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58325689630923)
1. This supertypes and subtypes inherits the properties like inheritance works in OOPS.

#### [C21 - Union Entity types](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58325689640923)
1. Union Entity Types have two important rules:
   1. Employer is either a part of government agency or company.
   2. There is no employer which is a part of government agency or company.
2. Circled U is the representation.

#### [C22 - (headshot) Thing, Relationship, Property v2](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/63774098270923)
1. How do we know if the something is a thing or relationship or property? How much it depends on the context?
2. Is the EER model supporting the fundamental types of abstraction including classification aggregation and generalization?
3. What would be the type of the query on the EER model be?

#### [C23 - Are relationship entities?](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58324590530923)
1. Relationship may have attributes.
2. for 1-N (and 1-1) relationships, attributes may be moved to the entity on the "many-side" (either-side)

#### [C24 - Another Example](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58324590540923)
1. Sometimes you need to make the relationship as and entity and its attribute to be as its property.

#### [C27 - Relationship type or entity type](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58324590570923)
1. Whether something is relationship type or entity type or property type it all depends on the context. For example, dealing with genealogy lastname become an entity and name becomes the property of it.
2. Nothign in reality stand out and tell you that it is an entity, or relationship or property.

#### [C28 - What can EER do?](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58360285390923)
1. There are three kinds of abstraction that people normally agree are important when try to fix the perception of reality:
   1. Classification - Comes from entity types
   2. Aggregation
   3. Generalization - super subtypes relationship

#### [C29 - Car graphic](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58360285400923)
1. Engine requires instance of its parts which is not represetable in EER.
2. EER model doesn't support aggregation explicitly.
3. But you can enforce it and use existing types, relationship types etc.
4. It's like playing OOPS in C it might be good idea but not supported by any tool.

#### [C31 - What's the Result Type of a Query?](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58360285410923)

#### [C32 - EER Diagram](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58360285420923)
1. Since the result is a list of properties and not type, there is not way we can take that result and continue to operate on it with a query language. Hence it is not a closed query language.
2. Query languages have to be closed it is the only way we can formulate high level ideas and ask high level questions.
3. Later on in relational database we will see the powerful example of closed query language.
4. In author's opinion, the lack of generally agreed upon closed query language for the EER model is the reason that database management systems are not based on EER model.

#### [C33 - (headshot) Relational Model Theoretical Foundation v2](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/64078485420923)

#### [C34 - Relational Model](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58233796090923)
1. Relational Model is made up of
   1. Data Strucutres
   2. Constraints
   3. Operations
      1. Algebra
      2. Calculus
         1. Tuple Calculus (SQL)
         2. Domain Calculus (QBE)

#### [C35 - Data strucutres](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58233796100923)
1. There is only one type of data strucutres i.e. relationships.
2. A domain, D, is a set of atomic values. They can't be broken down. This can be thought of as a type.
3. A relation, R, is a subset of the set of ordered n-tuples. The elements of the subset belong to the domians D1-Dn. It is absolutely essential that a relation is subset.
4. An attirbute, A, is a unique name given to a domain in a relation helping us interpret domain values.
5. Think of the domain as set of values of similar types, the attribute as its name and a relation is the name of subset of values picked from different domain values.

#### [C36 - Big deal](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58233796110923)
1. Relation is a table name.
2. Column name an attribute name.
3. Domain is column type for example varchar(50), datetime, integer.
4. Tuples are rows.
5. The no of attributes is called degree.
6. The no of tuples is called cardinality.
7. Big Deal: The value of a relation is independent of attribute order and tuple order.

#### [C38 - Constraints](https://classroom.udacity.com/courses/ud150/lessons/5831689048/concepts/58233796120923)
1. Constraints:
   1. Keys
   2. Primary Keys - Following are the consequences (constraints) of defining a key as primary key.
      1. Entiry Integrity: No value of the primary keys is allowed to be a primary key.
      2. Referential Integrity: Whenever the primary key is referenced in another table it must be the subset of the values present in the table where it is primary key.

### L05 - Methodology II: Specification

#### [C07 - EER Mapping](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63772614280923)

#### [C08 - Reading EER Diagrams](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63772614290923)

#### [C09 - Data Formats-beg, steal, borrow](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63772614300923)
1. For deciding the data format follow the beg, steal, or borrow. If someone has done it just copy.

#### [C10 - Constraints](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63763909030923)
1. Some constraints, like you can't be friends with yourself, are not present in EER model neither in data formats. Hence these constraints should be programmed in the application.

#### [C11 - Task Decomposition](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63763909040923)
1. All the tasks present in the IFD should be made atomic meaning we should figure out if they can be decomposed or not.
2. Rules of thumb:
   1. Lookup vs insert, update or delete - different database locks. Hence if many different things are happening, the task should be decomposed.
   2. How many schema constructs are involved (how big a portion of database is involved in the operation?) - many database locks. The bigger the portion is, the harder it is to acquire all the logs that are needed in order to support consurrent execution of transactions on the database.
   3. Are enabling conditions consistent across tasks? (let run what can run - scheduling)
   4. Are frequencies consistent across tasks? (index only what must be indexed)
   5. Is consistency essential? (ACID transaction properties) - Is it really essential that all the pieces of a tasks get done in one transaction or things get spread out a little bit over time? For example, transferring money from one account to another.
   6. Is the mother task needed to control the subtasks? For example, banking example needs a mother task.

#### [C12 - Web apps vs Traditional apps](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/63763909050923)
1. Web apps are almost stateless (By use of ajax, web 2.0 and complex user interface they are becoming more like tradditional applications). Whereas
2. In traditional apps the whole slew of changes can be collected before submitting it to the database. The support better control of ACID transaction execution.

#### [C13 - Task Decomposition-View Profile v2](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64399586000923)

#### [C14 - Abstract Code-View Profile v2](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64399586010923)

#### [C15 - Task Decomposition-Edit Profile v2](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64399586020923)

#### [C16 - Abstract Code-Edit Profile v2](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64212160430923)

#### [C17 - Task Decomposition Friend Requests v2](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64935904870923)

#### [C19 - Specification](https://classroom.udacity.com/courses/ud150/lessons/6483678537/concepts/64935904880923)
1. Our specification phase is done. We have now EER diagram and tasks.
2. Now we will get the relational schema from EER diagram and get the SQL statements from decomposed tasks.

### L06 - EER Relational Mapping

#### [C02 - ET](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64881193050923)
1. For each entity type we create a relation.
2. Single value property is represented by attribute in the relation. For identifying property there will be a primary key attribute in the relation.
3. For a composite property, properties from which it is composed of is put as an attribute in the relation. The identity of the composite property is lost in the conversion process. Since the relation is made up of atomic values concept of composite property can't come in.
4. The relational model is inherently flat and the languages we are going to look, like, relatinal algebra, calculus and SQL only work when that's the case.

#### [C03 - ET-A-F](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64002181370923)
1. There is no multiple values in relational model. Hence a seperate relation with the name ET-F is created where ET is the entity and F is the multiple value property. ET-F relation will have composite key of identifying property of ET, A, and F.
2. Now since A attribute in ET-F relation works as a foreign key it has to be the subset of A attribute in ET. Also since ET-F relation is a set, A, F attribute combination in the ET-F must be unique.

#### [C04 - ET1-A-ET2](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64848598850923)
1. ET1 with identifying property A, and ET2 with identifying property B is related with 1-1 relationship R. This means we should be able to find a particular value of A corresoponding to a particular value in B via relationship R. Hence the primary key attribute A in ET1 should be foreign key attribute in B or vice versa.
2. In the case when ET2 is having mandatory relationship R with ET1 (no ET2 is without relationship in ET1), the B of ET2 can't be a foreign key in ET1. A of ET1 has to be a foreign key in ET2. Reason: foreign key must be subset of primary key otherwise B as foreign key in ET1 will have some null values.

#### [C05 - ET1-R-ET2-1-N](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64762904400923)
1. In the case when ET1 is pointing to ET2, ET1 foreign key will have multiple values which is not allowed in relational model. Hence ET2 should be pointed to ET1. This means, primary key of ET1 is present in ET2 as foreign key.

#### [C06 - ET1-R-ET2-N-M](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64909487730923)
1. In this case, neither we can point ET1 to ET2 nor ET2 to ET1.
2. In this case, we will have to create a new relation R in relational model with attributes A and B (primary keys from both ET1 and ET2). A and B together make composite key for relation R with A as foreign key of ET1 and B as foreign key of ET2. This also represents the way we define relations i.e. naming the combinations uniquely.

#### [C07 - ET1-R-A-ET2](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64701204790923)
1. When there is an weak relation between ET1 and ET2, with B partial idenfier to ET2. We put A as foreign key in ET1 in combination with B, making composite key which can uniquely identify tuples in ET2 relation.

#### [C08 - Case 1](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64389349920923)
1. Mapping super subtypes has four cases:
   1. Mandatory - disjoint: In this case, create two relations ET1 and ET2, with attributes A, B (properties of parent ET) common in both and C in ET1 as an attribute and D in ET2 as an attribute. Since there is no ET without any relation to ET1 or ET2 (mandatory disjoint remember), this solution will contain all the tuples in relational model.

#### [C09 - Case 2](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64803399140923)
1. Mandatory - overlap:
   1. Solution 1: Introduce a type attribute in single relation with all the attributes. Here type will tell whether the instance in present in ET1 or ET2 or both. Drawbacks:
      1. Either C or D will be null.
      2. Also consistency is hard to maintain because we explicitly need to mention in the type whether the value is present in C or D or both.
   2. Solution 2: Make three relations ET, ET1 and ET2 with ET1 and ET2 pointing to ET using foreign key A from primary key A of ET. Drawbacks:
      1. Attribute A is represented couple of extra time in the relations.

#### [C10 - Case 3](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64848485630923)
1. Non-mandatory - overlap:
   1. The solutions will be same as the previous two solutions, meaning in solution 1 C and D both can be null with one more type value. And in solution 2 there can be some ET instances which are not present in either ET1 or ET2.
   2. Again the solution 1 is not preferable with same drawbacks.

#### [C11 - Case 4](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/63797564690923)
1. Non-mandatory - disjoint:
   1. Again the solution 2 discussed in the last case is also the solution here. Same working and explanation. In fact, this can also be the solution of case 1. Here, since, the instances will either be present in ET1 or ET2, there will be no drawback of repeating instances of attribute A.

#### [C12 - ET-B-ET1-ET2](https://classroom.udacity.com/courses/ud150/lessons/6473290602/concepts/64964587290923)
1. Problem: ET is a subset of union of ET1 and ET2 where ET1 and ET2 has no common instance. The relation is union type.
2. Solution: ET1 must be a relation with attribute C for C identifier. Similarily ET2 will be with D. Now since ET is subset we can create ET-ID, a unique identifier for ET which is present as foreign key in ET1 and ET2, making them point to ET. Remember since there is no common element in ET1 and ET2, any ET-ID instance will not be present in ET1 and ET2 both. If and instance in ET1 or ET2 is not present in ET will the ET-ID attribute be null?

### L07 - Methodology III: Design

#### [C01 - Design](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64841599330923)
1. We are done with specification phase and now design phase.
2. In the design phase we first convert EER model to relational schema.
3. Then we convert abstract code for the task and translate that into abstract code with embeded SQL that will do the relational schema what the task was specified to do through the EER diagram.

#### [C02 - EER Diagram Review 1](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64228457200923)

#### [C03 - EER Diagram Review 2](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64890895190923)

#### [C04 - Mapping the Super Subtype v2](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64867200700923)

#### [C05 - Weak Entity Type Mapping](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64790185790923)

#### [C06 - Relational Schema](https://classroom.udacity.com/courses/ud150/lessons/6484909935/concepts/64502215820923)

### L08 - Normalization

#### [C01 - Normalize](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64046586950923)
1. Mapping of EER Diagram to relations will, in all cases, result in the database which is normalized.
2. But we still need to normalize, normalize, normalize:
   1. Database are forever, "they are all I need to please me, they can stimulate and tease me, they won't leave in the night, I fear that they might desert me" - Shirley Bassey, '71
   2. EER Diagram go missing
   3. Databases "are like a box of chocolates" - Gump'94
   4. Sometimes it is designed by experts, sometimes by idiots, and sometimes some compromises has been made in order to database to run faster.

#### [C02 - What's it all about?](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64046586960923)
1. Given a relation and a set of functional dependcies, like these, how do we normalize the relation without information loss and so that the functional dependencies can be enforced?
2. Is the relation laid out in such a manner that it is easy to enforce such functional dependencies that we want to enforce in the database?

#### [C03 - (headshot) The Rules](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64046586970923)
1. The rules:
   1. no redundancy of facts
   2. no cluttering of facts
   3. must preserve information
   4. must preserve functional dependencies

#### [C04 - Not a relation](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64046586980923)
1. It is very easy to end-up in the data structure which is not a relation. The data structure we are discussing is non-first normal form data structure NF<sup>2</sup>.
2. The example is an attribute is containing multiple values. Rememeber, the values of attributes should be pulled from set of atomic values. Hence, one obvious solution can be to repeat the tuple with different values of the attribute in the same relation.

#### [C05 - Relation with problems](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64114685400923)

#### [C06 - Relation with Problems-Redundancy](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63822185520923)
1. Since we have duplicated the values of many attributes, redundancy will lead to inconsistency.

#### [C07 - Relation with Problems-Insertion anomaly](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63822185530923)
1. Since there is one functional dependency of getting the salary from birthdate.
2. If we insert a new regular user without any interest, then we must insert NULL values for interest and since age.
3. If we insert a pair of birth year and salary, then we must insert null values for email, interest, since age and current city.

#### [C08 - Relation with Problems-Deletion anomaly](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63822185540923)
1. If we delete a user, then we lose the fact - for given year (user's birthyear) what is the salary (user's salary).

#### [C09 - Relation with Problems-Update anomaly](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63822185550923)
1. Any attribute value update will be done at multiple places.

#### [C10 - Information loss](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63761499790923)
1. So the solution is we must decompose the relation into two. And we can recombine them whenever it is needed.
2. But the problem right now is that by joining the relation we will get some extra information which doesn't represent the true reality and hence we have lost the information of the correct value. Hence it is an information loss.

#### [C11 - Dependency Loss](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703100710923)
1. If we decompose a relation into two relations, then we cannot enforce the functional dependencies that are split between the two relations.

#### [C12 - Perfect](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703100720923)
1. A prefect solution would be with:
   1. No redundancy
   2. No insertion anomalies
   3. No deletion anomalies
   4. No update anomalies
   5. No information loss
   6. No dependency loss

#### [C13 - Functional Dependencies](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703100730923)
1. Functional Dependencies: Let X and Y be sets of attributes in R. Y is functionally dependent on X in R iff (if and only if) for each X in R (belonging to R) there is precisely one Y belonging to R

#### [C14 - Full Functional Dependencies](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703100740923)
1. Full Functional Dependencies: If Y is functionally dependent on X and Y is not functional dependent on any proper subset of X.
2. The last example was fully functional dependency example. What is not fully functional dependency is when the current city is also present in the table. Since each user has only one current city it can be determined by email alone and we don't need the interest. In the case of determining the since age for interest we need both email and interest, hence this example is fully functional dependency example.

#### [C15 - Functional Dependencies and Keys](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63826311150923)
1. How do you enforce functional dependencies?
   1. We use keys to enforce full functional dependencies, X -> Y. For example, when since age is dependent on email and interest both, we make email and interest as composite key to determine since age uniquely
   2. In a relation, the values of the key are unique!
   3. That is why it enforces a function!

#### [C16 - Overview of Normal Forms](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63826311160923)
1. To help us recognize how well a relation is laid out, we are going to introduce four normal forms.
   1. First, in general, the whole set of data structures is called non-first normal form, NF<sup>2</sup>. Most of those are not relations in the sense we have defined what a relation is.
   2. A subset of non-first normal form data structures is the set of first normal form relations. 1NF
   3. A subset of first normal form relations is the second normal form relations. 2NF
   4. Within the second normal form relations, there is a subset of third normal form relations. 3NF
   5. As a subset of third normal form relations is a set of Boyce-Codd normal form relations. BCNF. Boyce-Codd normal form relations are the relations we are aiming at.
2. There are possibilities that some relation are in 1NF but not in 2NF and so on. However in practice what happens is you normalize 2NF and you end up in Boyce-Codd normal form rather than 3NF.

#### [C17 - Normal Forms - Definitions](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63826311170923)
1. NF<sup>2</sup> - non first normal form.
2. 1NF - R is in 1NF iff all domain values are atomic. Since this is what is definition of relation, all relations are born in first normal form.
3. 2NF - R is in 2NF iff R is in 1NF and every nonkey attribute if fully dependent on the key.
4. 3NF - R is in 3NF iff R is 2NF and every nonkey attribute is non-transitively dependent on the key. Transitively means you can determine an attribute with some transition, for example, A -> B and A -> D then A -> D which makes this transitive.
5. BCNF - R is in BCNF iff every determinant is a candidate key.
6. Determinant - a set of attributes on which some other attribute is fully functionally dependent.

#### [C18 - Kent and Diehr quote](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63826311180923)
1. All attributes must depend on the key (1NF), the whole key (2NF), and nothing but they key (3NF), so help me codd (Ted Codd - inventor of relational databases).

#### [C19 - 1NF BCNF flow chart](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703205180923)
1. Look at the video to understand how 1NF is transformed to BCNF.

#### [C20 - Compute with Functional Dependencies-Armstrong's rules](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703205190923)
1. To make sure that we don't loose information, and that we preserve the functional dependencies when we decompose relations, we need to be able to compute with meaning. The rules are called Armstrong's rules. -> means determines
   1. Rule of reflexivity: If Y is part of X, then X -> Y. Email, Interest -> Interest. (since interest is part of email, interest)
   2. Rule of augmentation: If X -> Y, then WX -> WY. If email -> birthyear, then email, interest -> birthyear, interest.
   3. Rule of transitivity: If X -> Y and Y -> Z, then X -> Z. Email -> birthyear, birthyear -> salary then email -> salary.

#### [C21 - How to guarantee lossless joins](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703205200923)
1. How to guarantee lossless joins?
   1. The join field must be a key in atleast one of the two relations.
   2. When we joining using the key then we are gauranteed to not create additional tuples that were not present.
   3. When join key is the key, there's not way of blowing duplicates in one column with duplicates in the other relation's column which created the behavior lossy.

#### [C22 - How to guarantee preservation of FDs](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/63703205210923)
1. The meaning implied by the remailing function depedencies must be the same as the meaning that was implied by the original set.
2. For example, we used rule of transitivity to conclude that email -> salary from email -> birthyear, birthyear -> salary.

#### [C23 - Email Interest](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64820388220923)
1. Example, to understand again how to break the 1NF to BCNF losslessly.

#### [C24 - 3NF and BCNF](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64820388230923)
1. There does exist relations which can only be decomposed to 3NF, but no to BCNF, while being lossless and dependency preseving.
2. It can only happen when the relation has ovelapping keys.

#### [C25 - It never happens in practice](https://classroom.udacity.com/courses/ud150/lessons/5828669713/concepts/64820388240923)
1. Proof by experience:
   1. It never happened to me in 35 years.
   2. My database books.

### L09 - Methodology III: Design (SQL Statements)

#### [C01 - SQL-Create Table Statements](https://classroom.udacity.com/courses/ud150/lessons/6437868622/concepts/64964587780923)
1. This whole lesssion videos are writing abstract SQL to create the table, and perform operations e.g. view profile etc. What till the end to get the hang of it which you already know.

#### [C13 - Design on to Abstract Code w SQL](https://classroom.udacity.com/courses/ud150/lessons/6437868622/concepts/64908391240923)
1. We have completed the design phase of Database application development methodology.
2. We took the extended interrelationship diagram, used the mapping to generate the set of relations.
3. We checked the relations are in proper Boyce-Codd normal form.

### L10 - Relational Algebra and Calculus

#### [C01 - Closed Algebra](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/60130214350923)
1. So, the closed algebra is said to be closed because each time you do an operation on these rational numbers you get a rational number back. The same type as the operands you started out with.
2. A closed algebra allows you to formulate higher level models. A closed algebra allows you to use previous thoughts to form a new thoughts to build high level models.

#### [C02 - Relational Algebra Operators](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58706685350923)
1. Set Operators - all of these are not fundamental operators some are derived from other operators.
   1. Union
   2. Intersection
   3. Set Difference
   4. Cartesian Product
2. Special Operators
   1. Projection Operator - For eliminating columns.
   2. Selection Operator - For eliminating rows.
3. Construtor Operations - Joins
   1. Natural Join
   2. Outer Joins - Left Join, Right Join, Full Join.
   3. Theta Joins
4. Additional Operators
   1. Divide By Operator
   2. Rename Operator - Allows to change the names of attributes.

#### [C03 - Selection](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58706685360923)
1. Syntax is &sigma;<sub>expression</sub>(R) on relation R. It will return the part of relation which satisfy the expression.

#### [C04 - Selection - Simple Expression](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58706685370923)
1. For example, &sigma;<sub>HomeTown='Atlanta'</sub>(RegularUser). This will take all the columns which were present in the original relation.

#### [C05 - Selection-Composite Expression](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58706685380923)
1. Following composite expression are allowed:
   1. expression1 AND expression2 - conjunction (&and;).
   2. expression1 OR expression2 - disjuntion (&or;).
   3. (expression)
   4. NOT(expression)

#### [C06 - Projection](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58288998010923)
1. Projection - &pi;<sub>A1, A2 ... An</sub>(R).
2. Find email, birthyear, and sex for RegularUsers in Atlanta.
3. &pi;<sub>Email, BirthYear, and Sex</sub>(&sigma;<sub>HomeTown='Atlanta'</sub>(RegularUsers))
4. This composite query was only possible because it is a closed query language and we know the result of selection would be a relation and we can apply projection on it.

#### [C07 - Relations are Sets](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58288998020923)
1. Always remember relations are sets.
2. If you perform a project some relation by leaving some attribute then those tuples which are equal after the project will be present only once. For example, if you pull only sex of regular users and there are more than 2 rows, you'll get only two rows of male and female sex.
3. Since relational algebra is closed query language, the result must be a relation which is always a set.

#### [C09 - Union - &cup;](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58288998030923)
1. OR is a Union of results.
2. Type Compatible: No of attributes of two operands must be same and they must be pairwise same types.
3. The two relations in a union, intersection or the set difference must be type compatible.

#### [C10 - Intersection - &cap;](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58288998040923)

#### [C11 - Set Difference](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58288998050923)
1. Find all cities that are a current city for some RegularUser, but exclude those that are a HomeTown for some RegularUser.

#### [C12 - Natural Join](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58631588850923)
1. Matches values of attributes with same names.
2. Keeps only one copy of the join attributes (columns).
3. is an inner join.
4. Remember: If there are multiple values matching all the result would be duplicated from the single value table.

#### [C13 - Theta Join](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58631588860923)
1. Theta join is used exactly like natural join but the expression here can take compare expressions rather than equality expressions.
2. &theta;: comparison expressions
3. all attibutes are preserved.
4. also an inner join because the things which don't mathc each other will not contribute in the tuples in the result table.

#### [C14 - Left Outer Join](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58631588870923)
1. (Left) Outer Join: Inner Join + preserve all the remaining tuples from the left table.
2. Those which the matches called inner part of the query.
3. Those with nulls are called outer part of the query.
4. Variations:
   1. Natural (Left) Outer Join (as here), or.
   2. a special case of theta-join.

#### [C15 - Cartesian Product - &times;](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58631588880923)
1. It simply combines the tuples from the left to the tuples from the right.

#### [C16 - Cartesian Product-Can be Useful](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58631588890923)
1. Suppose you want to know the users with the interest which they are not following right now. The approach would be to first create email blast i.e. combine all the email with all the interest using cartesian product and then subtract them with the email with interest which already exists.
2. For that the query would be:
   1. (&pi;<sub>Email</sub>(RegularUser) &times; &pi;<sub>Interest</sub>(UserInterests)) \ &pi;<sub>Email, Interest</sub>(UserInterests)
   2. Notice that in order to substract the resulting relation from the left should be type compatible.

#### [C17 - Devideby - &divide;](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58233297650923)
1. Find all the users with at least all the interests of user1.
2. &pi;<sub>Email, Interest</sub>(UserInterests) &divide; &pi;<sub>Interests</sub>(&sigma;<sub>Email='user1@'</sub>(RegularUser))

#### [C18 - Rename - &rho;](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58233297660923)
1. Useful to control natural join, theta join, etc.
2. &rho;<sub>RUser[Year BirthYear, Gender Sex]</sub>(RegularUser) - It will rename the relation RegularUser to RUser and rename attributes BirthYear and Sex to Year and Gender respectively.

#### [C19 - (headshot) Relational Calculus intro](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/63356918370923)
1. We have looked a relational algebra. That's one of the two fundamental formalism. The second one is relational calculus.
2. To distinguish between the two:
   1. Relational algebra is procedural in nature. It's operator based. You tell step by step how to operator to get to the resulting relation.
   2. Calculus in comparison is declarative in nature. Instead of saying what to do step by step you simply describe the result that you want. So it may appear that it's higher-level language with more expressive power. But with respect to data retrieval of horsepower, they can actually be shown to be equivalent. SQL is mostly based on tuple calculus.

#### [C20 - Relational Caculus Expressions](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58233297670923)
1. In this particular case we are going to look at Relational Tuple Calculus. It has queries that range over the set of tuples.
2. So the semantics of the query like {t \| P(t)} is to find the set of tuples t that satisfy the predicate P. Predicates are built from atoms.
3. Predicates are built from atoms. Lets look at some of the atoms:
   1. range expression: t &isin; R and R(t) denote that t is tuple of relation R.
   2. attribute value: t.A denotes the value of t on attribute A
   3. constants: c denotes a constant
   4. comparison operators &theta;: =, &ne;, &le;, &ge;, <, >
   5. atoms: t &isin; R, r.A &theta; s.B, or r.A &theta; c
   6. predicate: an atom is a predicate; if P<sub>1</sub> and P<sub>2</sub> are predicates, so are (P<sub>1</sub>), **not**(P<sub>1</sub>), P<sub>1</sub> **or** P<sub>2</sub>, P<sub>1</sub> **and** P<sub>2</sub>, P<sub>1</sub> &Rightarrow; P<sub>2</sub>
   7. if P(t) is predicate, t is a free variable in P, and R is a Relation then &exist;(t&isin;R)(P(t)) and &forall;(t&isin;R)(P(t)) are predicates.

#### [C21 - Selection-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58233297680923)
1. Find all the RegularUser. { r \| r&isin;RegularUser }

#### [C22 - Selection-Composite Expression-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58233297690923)
1. Find all the RegularUser's who have the same CurrentCity and HomeTown or have HomeTown Atlanta.
2. { r \| r&isin;RegularUser and (r.CurrentCity = r.HomeTown or r.HomeTown = 'Atlanta') }.

#### [C23 - Projection-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296597290923)
1. Find Email, BirthYear, and Sex for RegularUser's with HomeTown Atlanta.
2. { r.Email, r.BirthYear, r.Sex \| r&isin;RegularUser and r.HomeTown = 'Atlanta' }

#### [C24 - Union-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296597300923)
1. Find all the cities that are a CurrentCity or a HomeTown for some RegularUser.
2. { s.City \| &exist;(r&isin;RegularUser)(s.City=r.CurrentCity) **or** &exist;(t&isin;RegularUser)(s.City=t.HomeTown) }

#### [C25 - Intersection-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296597310923)
1. Find all cities that are a CurrentCity for some RegularUser and a HomeTown for some RegularUser.
2. { s.City \| &exist;(r&isin;RegularUser)(s.City=r.CurrentCity) **and** &exist;(t&isin;RegularUser)(s.City=t.HomeTown) }
3. Declarative means: You define the criteria for results. Procedural means: You define the procedure to achieve results.

#### [C26 - Set Difference-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296597320923)
1. Find all cities that are a CurrentCity for some RegularUser, but exclude those that are HomeTown for some RegularUser.
2. { s.City \| &exist;(r&isin;RegularUser)(s.City=r.CurrentCity) **and** **not**(&exist;(t&isin;RegularUser)(s.City=t.HomeTown)) }

#### [C27 - Natural Join-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296597330923)
1. Find Email, Year, Sex and Event when the (Birth)Year of the RegularUser is the same as the (Event)Year of the Major60sEvent.
2. { t.Email, t.Year, t.Sex, t.Event \| &exist;(r&isin;RegularUser) &exist;(s&isin;Major60sEvent) (r.Year=s.Year and t.Email=r.Email and t.Year=r.Year and t.Sex=r.Sex and t.Event=s.Event) }

#### [C28 - Cartesian Product-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296399170923)
1. Combine all RegularUser tuples with all the UserInterests tuples.
2. { r, s \| r&isin;RegularUser and s&isin;UserInterests }

#### [C30 - Cartesian Product-Can be Useful-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296399180923)

#### [C31 - Divideby-CALC](https://classroom.udacity.com/courses/ud150/lessons/5856028539/concepts/58296399190923)
1. Find email of all users with at least all the Interests of user1.
2. { r.Email \| r&isin;UserInterests and &forall;(s&isin;UserInterests)((s.Email&ne;'User1') **or** &exist;(t&isin;UserInterests)(r.Email=t.Email and t.Interest=s.Interest)) }

### L11 - SQL

#### [C01 - (headshot) SQL Introduction](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/63115843780923)

#### [C07 - General SQL Query Syntax](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58717385440923)
1. The general syntax of SQL query is:
   1. SELECT column<sub>1</sub>, column<sub>2</sub>, ... column<sub>n</sub> FROM table<sub>1</sub>, table<sub>2</sub>, ... table<sub>n</sub> WHERE condition;
   2. Equivalent Algebra: &pi;<sub>column<sub>1</sub>, ... column<sub>n</sub></sub>(&sigma;<sub>condition</sub>(table<sub>1</sub> &times;, ... table<sub>n</sub>))
   3. It projects the mentioned columns from the cartesian product of the tables mentioned with conditions applied.

#### [C12 - Distinct](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58295600920923)
1. Where relations are set, tables may have duplicate rows.
2. Use DISTINCT() function to find distinct values in the column which passed through this function.

#### [C13 - Natural Inner Join-dot notation](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58295600930923)

#### [C15 - Natural Inner Join-aliases](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58295600940923)

#### [C16 - Left Outer Join](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58295600950923)

#### [C17 - String Matching](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58295600960923)
1. SQL databases are real practical tools. They need to have capabilities that you have not seen before in relational algebra and calculus.
2. String matching capabilities are second one of those (first one was DISTINCT()).
3. Suppose you need to "Find data about RegularUser's who live in a CurrentCity that starts with "San"
4. SELECT Email, Sex, CurrentCity FROM RegularUser WHERE CurrentCity LIKE 'San%'
5. % matches any string, including the empty string. _ matches any single character.

#### [C18 - Sorting](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58288999970923)
1. Again practical application.
2. ORDER BY Column ASC/DESC
3. Sort on multiple columns is also possible.

#### [C19 - Set Operations-Union](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58288999980923)
1. Find all the CurrentCity's and HomeTown's without duplicates.
2. SELECT CurrentCity FROM RegularUser UNION SELECT HomeTown FROM RegularUser;
3. You may find that the result doesn't contain any duplicates that is because the semantics of Union, Intersection and Set Difference operators is that sets are returned.
4. In case you do want to get duplicates then use UNION ALL.

#### [C20 - Set Operations-Intersect](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58288999990923)
1. Find all the cities that are CurrentCity's for someone and HomeTown's for someone without duplicates.
2. INTERSECT is used with syntax similar to last operation.
3. Again if you want all the cities in the result as many times as the appear, use INTERSECT ALL.

#### [C21 - Set Operations-Except](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58289000000923)
1. Find cities which are CurrentCity but not HomeTown.
2. EXCEPT is used.
3. Again use EXCEPT ALL to see the duplicates.

#### [C22 - Built in Functions](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58324700610923)
1. count, sum, avg, min, max
2. SELECT count(*) FROM RegularUser - counts the no of rows in the table.
3. SELECT Email, max(BirthYear) FROM RegularUser WHERE Sex='F - Finds the youngest female RegularUser.

#### [C23 - Group By](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58324700620923)
1. You can also put conditon on GROUP BY keyword to return only group which satisfy the condition.

#### [C24 -Having-Condition on the group](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58324700630923)
1. HAVING is used to put condition on the group.
2. SELECT Email, count(*) AS NumInt FROM UserInterests GROUP BY Email HAVING NumInt > 1 ORDER BY NumInt ASC;

#### [C25 - Nested Queries-In/Not In](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58324700640923)
1. Find Email and Interests for RegularUser's in Atlanta.
2. SELECT Email, Interest FROM UserInterests WHERE Email IN (SELECT Email FROM RegularUser WHERE HomeTown= 'Atlanta');
3. An alternative way would be:
   1. SELECT U.Email, Interest FROM UserInterests I, RegularUser U WHERE I.Email=U.Email AND HomeTown='Atlanta';
#### [C26 - Nested Queries-Some/All](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58262205040923)
#### [C27 - Nested Queries-correlated](https://classroom.udacity.com/courses/ud150/lessons/5869648587/concepts/58262205050923)

### L12 - Efficiency
#### [C01 - Efficiency/Indexing/Physical Database...](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73421110430923)
#### [C02 - Computer Architecture](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73203120320923)
#### [C03 - Why should you care](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73688185370923)
#### [C04 - Main Memory vs Disk](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73267425040923)
#### [C05 - Disk](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73276021470923)
#### [C06 - Records](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73221322050923)
#### [C07 - Blocks](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73193321430923)
#### [C08 - Files](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73274318130923)
#### [C09 - Assumptions](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73231221000923)
#### [C10 - Heap-Unsorted](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73267323480923)
#### [C11 - Heap setup](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/79669269810923)
#### [C12 - Heap](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73237921870923)
#### [C13 - Sorted but](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73255422510923)
#### [C14 - Sorted Binary](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73222024960923)
#### [C15 - Sorted File](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73257215910923)
#### [C16 - Primary Index -Part 1](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73304316350923)
#### [C17 - Primary Index -Part 2](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73238125120923)
#### [C18 - Sparse Index](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73249223880923)
#### [C19 - Secondary Index](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73256021350923)
#### [C20 - Multi-Level Index](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73421116680923)
#### [C21 - Multi-Level Headshot](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73284424250923)
#### [C22 - Multi-Level Index B-Tree](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73255728290923)
#### [C23 - Static Hashing Part I](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73229632620923)
#### [C24 - Static Hashing Part 2](https://classroom.udacity.com/courses/ud150/lessons/6474158572/concepts/73248951260923)

### L13 - Methodology IV: Implementation
#### [C01 - Implementation](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889080923)
#### [C02 - AMP solution stack](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889090923)
#### [C03 - Implementation Data First](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889100923)
#### [C04 - WAMP stack demos (headshot)](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889110923)
#### [C05 - Install the WAMP Stack](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889120923)
#### [C06 - Run the WAMP Stack](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69948889130923)
#### [C07 - Demo 03](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894890923)
#### [C08 - To Index or Not Many Things to Consider](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894900923)
#### [C09 - To Index or Not Size of Table](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894910923)
#### [C10 - To Index or Not Multiple Access Paths add up](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894920923)
#### [C11 - To Index or Not Reads and or Writes](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894930923)
#### [C12 - To Index or Not Already Indexed](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894940923)
#### [C13 - To Index or Not Some Advice](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894950923)
#### [C14 - Implementation Tasks](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894960923)
#### [C15 - Run PHP Scripts for GTOnline example](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894970923)
#### [C16 - HTML demo](https://classroom.udacity.com/courses/ud150/lessons/6373328252/concepts/69927894980923)

### L14 - Metadata
#### [C01 - Archival Metadata Hardware used](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650310120923)
#### [C02 - Experiences with Metadata](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650310130923)
#### [C03 - The Question](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650310140923)
#### [C04 - Preservation Metadata OAIS Information Model](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650310150923)
#### [C05 - OAIS Information Model](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650310160923)
#### [C06 - Content Information Package](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79756503740923)
#### [C07 - OAIS Information Model   part 02](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79611410460923)
#### [C08 - Preservation Description Information](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79611410470923)
#### [C09 - OAIS Information Model   part 03](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79611410480923)
#### [C10 - Standards for Archival Metadata are not mature](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79611410490923)
#### [C11 - Metadata Representation Standards](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79611410500923)
#### [C12 - Several elements are necessary](https://classroom.udacity.com/courses/ud150/lessons/6480038557/concepts/79650215300923)

> A [Run Through]({{ site.url }}) of Udacity's free course [UD150 - Database Systems Concepts and Design](https://classroom.udacity.com/courses/ud150)